
import { BookOpen, RotateCcw } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  quizTitle: string;
  onReset: () => void;
  onSelectNewQuiz: () => void;
}

const QuizResult = ({ 
  score, 
  totalQuestions, 
  quizTitle, 
  onReset, 
  onSelectNewQuiz 
}: QuizResultProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "";
  if (percentage >= 80) {
    message = "Excellent! You have a great understanding of the topic.";
  } else if (percentage >= 60) {
    message = "Good job! You have a solid knowledge base.";
  } else if (percentage >= 40) {
    message = "Not bad! You're making progress in your learning.";
  } else {
    message = "Keep learning! This is a great opportunity to deepen your knowledge.";
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-orange-700">
          Quiz Results - {quizTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-orange-600 mb-2">{percentage}%</p>
          <p className="text-gray-600">
            You scored {score} out of {totalQuestions} questions
          </p>
        </div>
        
        <Progress value={percentage} className="h-3 bg-orange-100" />
        
        <div className="bg-orange-50 p-4 rounded-lg mt-6">
          <p className="text-gray-700">{message}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onReset} 
          variant="outline" 
          className="w-full sm:w-auto flex items-center gap-2"
        >
          <RotateCcw size={16} />
          Try Again
        </Button>
        <Button 
          onClick={onSelectNewQuiz} 
          className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
        >
          <BookOpen size={16} />
          Choose Another Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizResult;
