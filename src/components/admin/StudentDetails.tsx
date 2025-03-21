
import { useState, useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { User, Loader2, ArrowLeft, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizData } from "@/data/quizData";

interface StudentDetailsProps {
  userId: string;
  onBack: () => void;
}

interface QuizAttempt {
  id: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  date: string;
}

interface UserDetails {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const API_URL = "https://your-laravel-api.com/api";

const StudentDetails = ({ userId, onBack }: StudentDetailsProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAdmin()) return;
    fetchUserDetails();
    fetchQuizAttempts();
  }, [userId]);

  useEffect(() => {
    if (!isAdmin()) return;
    fetchQuizAttempts();
  }, [selectedQuiz]);

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      if (!token) throw new Error("No auth token found");
      
      const response = await fetch(`${API_URL}/admin/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast({
        title: "Error",
        description: "Failed to load user details",
        variant: "destructive",
      });
    }
  };

  const fetchQuizAttempts = async () => {
    setIsLoading(true);
    
    try {
      const token = localStorage.getItem("auth_token");
      if (!token) throw new Error("No auth token found");
      
      const quizParam = selectedQuiz !== "all" ? `&quizId=${selectedQuiz}` : "";
      const response = await fetch(`${API_URL}/admin/users/${userId}/quiz-attempts?${quizParam}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch quiz attempts");
      }
      
      const data = await response.json();
      setQuizAttempts(data);
    } catch (error) {
      console.error("Error fetching quiz attempts:", error);
      toast({
        title: "Error",
        description: "Failed to load quiz attempts",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getQuizTitle = (quizId: string) => {
    return quizData[quizId]?.title || "Unknown Quiz";
  };

  if (isLoading && !userDetails) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button 
        variant="outline" 
        onClick={onBack}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Student List
      </Button>
      
      {userDetails && (
        <Card>
          <CardHeader className="bg-orange-50">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600" />
              Student Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{userDetails.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{userDetails.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Registered On</p>
                <p className="font-medium">{formatDate(userDetails.createdAt)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Quizzes Taken</p>
                <p className="font-medium">{quizAttempts.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardHeader className="bg-orange-50">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-600" />
              Quiz Attempts
            </CardTitle>
            <Select value={selectedQuiz} onValueChange={setSelectedQuiz}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Quiz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Quizzes</SelectItem>
                {Object.keys(quizData).map(quizId => (
                  <SelectItem key={quizId} value={quizId}>
                    {quizData[quizId].title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <Loader2 className="h-6 w-6 text-orange-500 animate-spin" />
            </div>
          ) : quizAttempts.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quiz</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quizAttempts.map((attempt) => {
                  const percentage = Math.round((attempt.score / attempt.totalQuestions) * 100);
                  let resultClass = "text-red-500";
                  if (percentage >= 70) resultClass = "text-green-500";
                  else if (percentage >= 50) resultClass = "text-yellow-500";
                  
                  return (
                    <TableRow key={attempt.id}>
                      <TableCell className="font-medium">{getQuizTitle(attempt.quizId)}</TableCell>
                      <TableCell>{formatDate(attempt.date)}</TableCell>
                      <TableCell>{`${attempt.score}/${attempt.totalQuestions}`}</TableCell>
                      <TableCell className={resultClass}>{`${percentage}%`}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No quiz attempts found
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDetails;
