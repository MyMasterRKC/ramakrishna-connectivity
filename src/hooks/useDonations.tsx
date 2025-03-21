
import { useState } from "react";
import { useAuth } from "./useAuth";
import { toast } from "sonner";

export interface Donation {
  id: string;
  amount: number;
  date: string;
  paymentMethod: string;
  status: "completed" | "pending" | "failed";
}

// Your Laravel API URL - replace with your actual API URL
const API_URL = "https://your-laravel-api.com/api";

export const useDonations = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

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

  // Fetch donations for a user
  const fetchDonations = async (userId: string): Promise<Donation[]> => {
    setIsLoading(true);
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setIsLoading(false);
      return [];
    }
    
    try {
      const response = await fetch(`${API_URL}/user/${userId}/donations`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch donations");
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching donations:", error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addDonation,
    fetchDonations,
    isLoading
  };
};
