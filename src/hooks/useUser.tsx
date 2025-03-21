
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface Donation {
  id: string;
  amount: number;
  date: string;
  paymentMethod: string;
  status: "completed" | "pending" | "failed";
}

export interface QuizAttempt {
  quizId: string;
  date: string;
  score: number;
  totalQuestions: number;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  addDonation: (donation: Omit<Donation, "id" | "date">) => void;
  addQuizAttempt: (quizId: string, score: number, totalQuestions: number) => void;
  fetchQuizAttempts: (userId?: string) => Promise<QuizAttempt[]>;
  isAdmin: () => boolean;
}

// Your Laravel API URL - replace with your actual API URL
const API_URL = "https://your-laravel-api.com/api";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on initial load
    const token = localStorage.getItem("auth_token");
    if (token) {
      fetchUserProfile(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  // Fetch user profile using the stored token
  const fetchUserProfile = async (token: string) => {
    try {
      const response = await fetch(`${API_URL}/user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error("Failed to get user profile");
      }

      const userData = await response.json();
      setUser({
        id: userData.id.toString(),
        name: userData.name,
        email: userData.email,
        role: userData.role || "user",
      });
    } catch (error) {
      console.error("Error fetching user profile:", error);
      // Clear invalid token
      localStorage.removeItem("auth_token");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      
      // Store the token in localStorage
      localStorage.setItem("auth_token", data.token);
      
      // Set user data from response
      setUser({
        id: data.user.id.toString(),
        name: data.user.name,
        email: data.user.email,
        role: data.user.role || "user",
      });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          name, 
          email, 
          password,
          password_confirmation: password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      
      if (data.token) {
        // Auto-login if token is provided
        localStorage.setItem("auth_token", data.token);
        setUser({
          id: data.user.id.toString(),
          name: data.user.name,
          email: data.user.email,
          role: "user", // Default role for new users
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    
    try {
      const token = localStorage.getItem("auth_token");
      
      if (token) {
        // Call Laravel logout endpoint
        await fetch(`${API_URL}/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Always clear local user data, even if API call fails
      localStorage.removeItem("auth_token");
      setUser(null);
      setIsLoading(false);
    }
  };

  // Check if current user is an admin
  const isAdmin = () => {
    return user?.role === "admin";
  };

  // Add a donation to the user's history
  const addDonation = async (donation: Omit<Donation, "id" | "date">) => {
    if (!user) return;
    
    const token = localStorage.getItem("auth_token");
    if (!token) return;
    
    try {
      // Send donation data to Laravel API
      const response = await fetch(`${API_URL}/donations`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(donation)
      });
      
      if (!response.ok) {
        throw new Error("Failed to record donation");
      }
      
      toast.success("Donation recorded successfully");
    } catch (error) {
      console.error("Error recording donation:", error);
      toast.error("Failed to record donation");
    }
  };

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
    const token = localStorage.getItem("auth_token");
    if (!token) return [];
    
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
      
      return await response.json();
    } catch (error) {
      console.error("Error fetching quiz attempts:", error);
      return [];
    }
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      isLoading,
      addDonation,
      addQuizAttempt,
      fetchQuizAttempts,
      isAdmin
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
