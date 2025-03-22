
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap, Lock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from "@/components/auth/AuthModal";
import { quizData } from "@/data/quizData";

interface QuizTopic {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  questions: number;
  requiresLogin: boolean;
}

interface QuizSelectorProps {
  onSelectQuiz: (quizId: string) => void;
}

const QuizSelector = ({ onSelectQuiz }: QuizSelectorProps) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const quizTopics: QuizTopic[] = Object.keys(quizData).map(key => {
    const quiz = quizData[key];
    
    let icon = <BookOpen className="h-6 w-6 text-orange-500" />;
    if (key.includes("sri-") || key.includes("swami-")) {
      icon = <Users className="h-6 w-6 text-orange-500" />;
    } else if (key.includes("spiritual-")) {
      icon = <GraduationCap className="h-6 w-6 text-orange-500" />;
    }
    
    const requiresLogin = ["sri-ramakrishna", "sri-sarada-devi", "spiritual-practices"].includes(key);
    
    return {
      id: key,
      title: quiz.title,
      description: quiz.questions[0].explanation.split(".")[0] + ".", 
      icon,
      questions: quiz.questions.length,
      requiresLogin
    };
  });

  const handleQuizSelect = (quiz: QuizTopic) => {
    if (quiz.requiresLogin && !user) {
      setAuthModalOpen(true);
    } else {
      onSelectQuiz(quiz.id);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {quizTopics.map((topic) => (
          <Card key={topic.id} className="hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-3 group-hover:bg-orange-200 transition-colors duration-300">
                {topic.icon}
              </div>
              <CardTitle className="text-xl text-orange-700 flex items-center justify-center gap-2">
                {topic.title}
                {topic.requiresLogin && !user && (
                  <Lock className="h-4 w-4 text-orange-500" />
                )}
              </CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{topic.questions} questions</p>
              {topic.requiresLogin && !user && (
                <p className="text-sm text-orange-600 mt-1">Login required</p>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleQuizSelect(topic)} 
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {topic.requiresLogin && !user ? "Login to Access" : "Start Quiz"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
};

export default QuizSelector;
