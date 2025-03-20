
import { useState } from "react";
import QuizCard from "./QuizCard";
import QuizResult from "./QuizResult";
import { quizData } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface QuizProps {
  quizId: string;
  onBack: () => void;
}

const Quiz = ({ quizId, onBack }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const quizInfo = quizData[quizId];
  const questions = quizInfo.questions;
  
  const handleQuestionCompleted = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };

  if (!quizInfo) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">Quiz not found</p>
        <Button onClick={onBack} className="mt-4">Go Back</Button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {!quizCompleted ? (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700"
            >
              <ArrowLeft size={16} />
              Back to Quiz Selection
            </Button>
            <p className="text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          
          <QuizCard
            question={questions[currentQuestionIndex]}
            onComplete={handleQuestionCompleted}
            onNext={handleNextQuestion}
            isLast={currentQuestionIndex === questions.length - 1}
          />
        </div>
      ) : (
        <QuizResult
          score={correctAnswers}
          totalQuestions={questions.length}
          quizTitle={quizInfo.title}
          quizId={quizId}
          onReset={handleReset}
          onSelectNewQuiz={onBack}
        />
      )}
    </div>
  );
};

export default Quiz;
