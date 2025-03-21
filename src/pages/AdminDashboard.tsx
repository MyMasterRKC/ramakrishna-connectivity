
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserList from "@/components/admin/UserList";
import QuizPerformance from "@/components/admin/QuizPerformance";
import StudentDetails from "@/components/admin/StudentDetails";
import { Shield } from "lucide-react";

const AdminDashboard = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const { user, isLoading, isAdmin } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if not logged in or not an admin
  useEffect(() => {
    if (!isLoading && (!user || !isAdmin())) {
      navigate("/");
    }
  }, [user, isLoading, navigate, isAdmin]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4">
          <p className="text-center text-gray-600">Loading dashboard...</p>
        </div>
      </Layout>
    );
  }

  if (!user || !isAdmin()) return null; // This prevents flash of content before redirect

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        
        {selectedUserId ? (
          <StudentDetails 
            userId={selectedUserId}
            onBack={() => setSelectedUserId(null)}
          />
        ) : (
          <Tabs defaultValue="students" className="w-full">
            <TabsList className="mb-8 bg-orange-50 border border-orange-100">
              <TabsTrigger 
                value="students" 
                className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
              >
                Students
              </TabsTrigger>
              <TabsTrigger 
                value="performance" 
                className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800"
              >
                Quiz Performance
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="students">
              <UserList onSelectUser={setSelectedUserId} />
            </TabsContent>
            
            <TabsContent value="performance">
              <QuizPerformance />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
