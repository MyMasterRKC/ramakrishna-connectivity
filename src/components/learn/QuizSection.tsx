
import { useState } from "react";
import { BookOpenCheck } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import QuizSelector from "@/components/quiz/QuizSelector";
import Quiz from "@/components/quiz/Quiz";
import AuthModal from "@/components/auth/AuthModal";

const QuizSection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user } = useUser();

  const handleQuizSelect = (quizId: string) => {
    setSelectedQuiz(quizId);
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz & Assessment</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Test your knowledge about the Holy Trinity and track your progress.
          {!user && " Login to save your quiz results and access all quizzes."}
        </p>
      </div>

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
