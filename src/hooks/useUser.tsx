
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  // You can add more user properties here when connecting to a real API
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Modified implementation to make it easier to connect to a real API
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // This login function could be replaced with a real API call
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Mock API call - replace with actual API call when ready
      // Example: const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation for demo
      if (email && password.length >= 6) {
        const newUser = {
          id: `user-${Date.now()}`,
          name: email.split('@')[0], // Use part of email as name if not known
          email,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        return;
      } else {
        throw new Error("Invalid credentials");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // This signup function could be replaced with a real API call
  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Mock API call - replace with actual API call when ready
      // Example: const response = await fetch('/api/signup', { method: 'POST', body: JSON.stringify({ name, email, password }) });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation for demo
      if (name && email && password.length >= 6) {
        // In a real implementation, we'd store the user in a database
        // For this demo, just simulate success
        return;
      } else {
        throw new Error("Invalid signup data");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout, isLoading }}>
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
