
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserProfile from "@/components/user/UserProfile";
import DonationHistory from "@/components/user/DonationHistory";
import QuizProgress from "@/components/user/QuizProgress";

const UserDashboard = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if not logged in
  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4">
          <p className="text-center text-gray-600">Loading dashboard...</p>
        </div>
      </Layout>
    );
  }

  if (!user) return null; // This prevents flash of content before redirect

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Dashboard</h1>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8 bg-orange-50 border border-orange-100">
            <TabsTrigger 
              value="profile" 
              className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger 
              value="donations" 
              className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
            >
              Donation History
            </TabsTrigger>
            <TabsTrigger 
              value="quizzes" 
              className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
            >
              Quiz Progress
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <UserProfile user={user} />
          </TabsContent>
          
          <TabsContent value="donations">
            <DonationHistory userId={user.id} />
          </TabsContent>
          
          <TabsContent value="quizzes">
            <QuizProgress userId={user.id} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default UserDashboard;
