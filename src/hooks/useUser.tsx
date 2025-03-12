
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock implementation for demo purposes
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

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
  }, []);

  const login = async (email: string, password: string) => {
    // This is a mock implementation - in a real app, you would call an API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simple validation for demo
        if (email && password.length >= 6) {
          const newUser = {
            id: `user-${Date.now()}`,
            name: email.split('@')[0], // Use part of email as name if not known
            email,
          };
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // This is a mock implementation - in a real app, you would call an API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simple validation for demo
        if (name && email && password.length >= 6) {
          const newUser = {
            id: `user-${Date.now()}`,
            name,
            email,
          };
          // In a real implementation, we'd store the user in a database
          // For this demo, we'll just simulate success
          resolve();
        } else {
          reject(new Error("Invalid signup data"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
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
