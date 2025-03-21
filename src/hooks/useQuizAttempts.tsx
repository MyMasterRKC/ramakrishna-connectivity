
import { useState } from "react";
import { useAuth } from "./useAuth";
import { toast } from "sonner";

export interface QuizAttempt {
  quizId: string;
  date: string;
  score: number;
  totalQuestions: number;
}

// Your Laravel API URL - replace with your actual API URL
const API_URL = "https://your-laravel-api.com/api";

export const useQuizAttempts = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Add a quiz attempt to the user's history
  const addQuizAttempt = async (quizId: string, score: number, totalQuestions: number) => {
    if (!user) return;
    
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    
    try {
      // Send quiz attempt data to Laravel API
      const response = await fetch(`${API_URL}/quiz-attempts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quizId,
          score,
          totalQuestions
        })
      });
      
      if (!response.ok) {
        throw new Error("Failed to record quiz attempt");
      }
    } catch (error) {
      console.error("Error recording quiz attempt:", error);
    }
  };

  // Fetch quiz attempts for a user (or all users if admin)
  const fetchQuizAttempts = async (userId?: string): Promise<QuizAttempt[]> => {
    setIsLoading(true);
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setIsLoading(false);
      return [];
    }
    
    try {
      // Admin can fetch all attempts or specific user's attempts
      const endpoint = userId ? 
        `${API_URL}/quiz-attempts/${userId}` : 
        `${API_URL}/quiz-attempts`;
      
      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch quiz attempts");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching quiz attempts:", error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addQuizAttempt,
    fetchQuizAttempts,
    isLoading
  };
};
