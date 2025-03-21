
import { useState, useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Loader2 } from "lucide-react";
import { quizData } from "@/data/quizData";

interface QuizPerformanceData {
  name: string;
  avgScore: number;
  attempts: number;
}

const API_URL = "https://your-laravel-api.com/api";

const QuizPerformance = () => {
  const [performanceData, setPerformanceData] = useState<QuizPerformanceData[]>([]);
  const [timeRange, setTimeRange] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin } = useUser();

  useEffect(() => {
    if (!isAdmin()) return;
    fetchPerformanceData(timeRange);
  }, [timeRange]);

  const fetchPerformanceData = async (range: string) => {
    setIsLoading(true);
    
    try {
      const token = localStorage.getItem("auth_token");
      if (!token) throw new Error("No auth token found");
      
      const response = await fetch(`${API_URL}/admin/quiz-performance?timeRange=${range}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch quiz performance data");
      }
      
      const data = await response.json();
      
      // Transform data for chart
      const chartData: QuizPerformanceData[] = Object.keys(quizData).map(quizId => {
        const quizStats = data.find((item: any) => item.quizId === quizId);
        return {
          name: quizData[quizId].title,
          avgScore: quizStats ? Math.round(quizStats.averageScore) : 0,
          attempts: quizStats ? quizStats.attemptCount : 0
        };
      });
      
      setPerformanceData(chartData);
    } catch (error) {
      console.error("Error fetching quiz performance:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="bg-orange-50">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-orange-600" />
            Quiz Performance
          </CardTitle>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="week">Past Week</SelectItem>
              <SelectItem value="month">Past Month</SelectItem>
              <SelectItem value="year">Past Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[400px]">
          {performanceData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="avgScore" name="Average Score (%)" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="attempts" name="Number of Attempts" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No quiz performance data available
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizPerformance;
