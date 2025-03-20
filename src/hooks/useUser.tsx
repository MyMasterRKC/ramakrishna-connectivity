
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  // You can add more user properties here based on your Laravel API response
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
        // Add any additional user properties here
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
        // Add any additional user properties here
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
          password_confirmation: password // Laravel typically requires password confirmation
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      // Registration successful - Laravel may or may not return a token here
      // If it returns a token, you can auto-login the user
      const data = await response.json();
      
      if (data.token) {
        // Auto-login if token is provided
        localStorage.setItem("auth_token", data.token);
        setUser({
          id: data.user.id.toString(),
          name: data.user.name,
          email: data.user.email,
        });
      }
      
      // If token is not provided, user will need to login separately
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

  // Add a donation to the user's history
  const addDonation = (donation: Omit<Donation, "id" | "date">) => {
    if (!user) return;
    
    // In a real app, this would call your Laravel API
    // For demo purposes, we'll use localStorage
    
    const newDonation: Donation = {
      ...donation,
      id: `don_${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    
    // Get existing donations from localStorage or initialize empty array
    const existingDonations = JSON.parse(localStorage.getItem(`donations_${user.id}`) || "[]");
    
    // Add new donation to the array
    const updatedDonations = [newDonation, ...existingDonations];
    
    // Save updated donations to localStorage
    localStorage.setItem(`donations_${user.id}`, JSON.stringify(updatedDonations));
    
    // Show success message
    toast.success("Donation recorded successfully");
  };

  // Add a quiz attempt to the user's history
  const addQuizAttempt = (quizId: string, score: number, totalQuestions: number) => {
    if (!user) return;
    
    // In a real app, this would call your Laravel API
    // For demo purposes, we'll use localStorage
    
    const newAttempt: QuizAttempt = {
      quizId,
      score,
      totalQuestions,
      date: new Date().toISOString().split('T')[0]
    };
    
    // Get existing attempts from localStorage or initialize empty array
    const existingAttempts = JSON.parse(localStorage.getItem(`quiz_attempts_${user.id}`) || "[]");
    
    // Add new attempt to the array
    const updatedAttempts = [newAttempt, ...existingAttempts];
    
    // Save updated attempts to localStorage
    localStorage.setItem(`quiz_attempts_${user.id}`, JSON.stringify(updatedAttempts));
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      isLoading,
      addDonation,
      addQuizAttempt
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
