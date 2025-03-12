
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap } from "lucide-react";

interface QuizTopic {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  questions: number;
}

interface QuizSelectorProps {
  onSelectQuiz: (quizId: string) => void;
}

const QuizSelector = ({ onSelectQuiz }: QuizSelectorProps) => {
  const quizTopics: QuizTopic[] = [
    {
      id: "sri-ramakrishna",
      title: "Sri Ramakrishna",
      description: "Test your knowledge about the life and teachings of Sri Ramakrishna",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      questions: 5
    },
    {
      id: "sri-sarada-devi",
      title: "Sri Sarada Devi",
      description: "Questions about Holy Mother Sri Sarada Devi",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      questions: 5
    },
    {
      id: "swami-vivekananda",
      title: "Swami Vivekananda",
      description: "Learn about the life and philosophy of Swami Vivekananda",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      questions: 5
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {quizTopics.map((topic) => (
        <Card key={topic.id} className="hover:shadow-lg transition-all duration-300 group">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-3 group-hover:bg-orange-200 transition-colors duration-300">
              {topic.icon}
            </div>
            <CardTitle className="text-xl text-orange-700">{topic.title}</CardTitle>
            <CardDescription>{topic.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{topic.questions} questions</p>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => onSelectQuiz(topic.id)} 
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default QuizSelector;
