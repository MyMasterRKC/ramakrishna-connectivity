
import { ReactNode } from "react";
import { AuthProvider, useAuth } from "./useAuth";
import { useQuizAttempts } from "./useQuizAttempts";
import { useDonations } from "./useDonations";

// This is our main hook that combines all the functionality
export const useUser = () => {
  const auth = useAuth();
  const quizAttempts = useQuizAttempts();
  const donations = useDonations();

  return {
    ...auth,
    ...quizAttempts,
    ...donations
  };
};

// This is our main provider that wraps the app
export const UserProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};
