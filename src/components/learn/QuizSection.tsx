
import { useState } from "react";
import { BookOpenCheck, History } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import QuizSelector from "@/components/quiz/QuizSelector";
import Quiz from "@/components/quiz/Quiz";
import AuthModal from "@/components/auth/AuthModal";
import { Button } from "@/components/ui/button";

const QuizSection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const handleQuizSelect = (quizId: string) => {
    setSelectedQuiz(quizId);
  };

  return (
    <section className="mb-16" id="quizzes">
      {user && !selectedQuiz && (
        <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <History className="h-5 w-5 text-orange-600" />
            <p className="text-gray-700">
              Your quiz results are saved to your profile. View your progress anytime.
            </p>
          </div>
          <Button asChild variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-100">
            <Link to="/dashboard?tab=quizzes">View History</Link>
          </Button>
        </div>
      )}

      {selectedQuiz ? (
        <Quiz quizId={selectedQuiz} onBack={() => setSelectedQuiz(null)} />
      ) : (
        <div className="animate-fade-in">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <BookOpenCheck className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Knowledge Assessment</h3>
            <p className="text-center text-gray-600 max-w-xl">
              Some quizzes are available for everyone, while others require login to access. 
              Challenge yourself to deepen your understanding of the Holy Trinity.
            </p>
          </div>
          <QuizSelector onSelectQuiz={handleQuizSelect} />
        </div>
      )}
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </section>
  );
};

export default QuizSection;
