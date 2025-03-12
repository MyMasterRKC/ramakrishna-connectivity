
import { Check, X } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  question: QuizQuestion;
  onComplete: (correct: boolean) => void;
  onNext: () => void;
  isLast: boolean;
}

const QuizCard = ({ question, onComplete, onNext, isLast }: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const isCorrect = selectedOption === question.correctAnswer;

  const handleSubmit = () => {
    if (selectedOption === null) {
      toast.error("Please select an answer");
      return;
    }
    
    setHasSubmitted(true);
    onComplete(isCorrect);
    
    if (isCorrect) {
      toast.success("Correct answer!");
    } else {
      toast.error("Incorrect answer");
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
    onNext();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-orange-700">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          value={selectedOption?.toString()} 
          onValueChange={(value) => setSelectedOption(parseInt(value))}
          disabled={hasSubmitted}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={index.toString()} 
                id={`option-${index}`}
                disabled={hasSubmitted}
              />
              <Label 
                htmlFor={`option-${index}`} 
                className={cn(
                  "flex-grow p-3 rounded-md cursor-pointer",
                  hasSubmitted && index === question.correctAnswer 
                    ? "bg-green-100 text-green-800" 
                    : hasSubmitted && index === selectedOption 
                      ? "bg-red-100 text-red-800" 
                      : "hover:bg-orange-50"
                )}
              >
                {option}
                {hasSubmitted && index === question.correctAnswer && (
                  <Check className="inline ml-2 text-green-600" size={16} />
                )}
                {hasSubmitted && index === selectedOption && index !== question.correctAnswer && (
                  <X className="inline ml-2 text-red-600" size={16} />
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {hasSubmitted && (
          <div className="mt-4 p-3 bg-orange-50 rounded-md">
            <p className="font-medium text-orange-800">Explanation:</p>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!hasSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            className="bg-orange-600 hover:bg-orange-700"
          >
            Submit Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNext} 
            className="bg-orange-600 hover:bg-orange-700"
          >
            {isLast ? "See Results" : "Next Question"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
