
import { useEffect, useState } from "react";
import { BookOpen, Trophy, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizData } from "@/data/quizData";

interface QuizAttempt {
  quizId: string;
  date: string;
  score: number;
  totalQuestions: number;
}

interface QuizProgressProps {
  userId: string;
}

const QuizProgress = ({ userId }: QuizProgressProps) => {
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuizProgress = async () => {
      try {
        // In a real app, this would fetch from your Laravel API
        // const response = await fetch(`${API_URL}/user/quiz-progress`, {
        //   headers: {
        //     'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,
        //     'Accept': 'application/json',
        //   }
        // });
        // const data = await response.json();
        
        // For demo purposes, we'll use mock data
        const mockAttempts: QuizAttempt[] = [
          {
            quizId: "trinity-basics",
            date: "2023-11-15",
            score: 8,
            totalQuestions: 10
          },
          {
            quizId: "ramakrishna-teachings",
            date: "2023-12-05",
            score: 7,
            totalQuestions: 10
          },
          {
            quizId: "meditation-101",
            date: "2024-01-10",
            score: 9,
            totalQuestions: 10
          }
        ];
        
        setQuizAttempts(mockAttempts);
      } catch (error) {
        console.error("Error fetching quiz progress:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizProgress();
  }, [userId]);

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

  return (
    <Card>
      <CardHeader className="bg-orange-50">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-orange-600" />
          Quiz Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {isLoading ? (
          <p className="text-center text-gray-600 py-4">Loading quiz progress...</p>
        ) : quizAttempts.length > 0 ? (
          <div className="space-y-6">
            {quizAttempts.map((attempt) => {
              const percentage = Math.round((attempt.score / attempt.totalQuestions) * 100);
              
              return (
                <div key={`${attempt.quizId}-${attempt.date}`} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{getQuizTitle(attempt.quizId)}</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        Completed on {formatDate(attempt.date)}
                      </p>
                    </div>
                    <span className="text-lg font-semibold text-orange-600">{percentage}%</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress value={percentage} className="h-2 bg-orange-100" />
                    <p className="text-sm text-gray-600 text-right">
                      {attempt.score} out of {attempt.totalQuestions} correct
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10">
            <AlertCircle className="h-12 w-12 text-orange-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No quiz attempts yet</h3>
            <p className="text-gray-600">
              Complete quizzes in the Learn section to track your progress.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizProgress;
