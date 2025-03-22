
import { useState, useEffect, KeyboardEvent } from "react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WORDS } from "@/data/wordleWords";

// Define the Wordle game states
type GameState = "playing" | "won" | "lost";

// Define the letter states
type LetterState = "correct" | "present" | "absent" | "unused";

const WordleGame = () => {
  const { user } = useAuth();
  const [gameState, setGameState] = useState<GameState>("playing");
  const [secretWord, setSecretWord] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [keyboardState, setKeyboardState] = useState<Record<string, LetterState>>({});
  const [message, setMessage] = useState<string>("");
  const [maxAttempts] = useState(6);
  
  // Initialize the game
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Select a random word from the list
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setSecretWord(randomWord);
    setGuesses([]);
    setCurrentGuess("");
    setGameState("playing");
    setMessage("");
    setKeyboardState({});
    
    console.log("New game started with word:", randomWord); // for debugging
  };

  // Handle keyboard input
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (gameState !== "playing") return;
    
    if (e.key === "Enter") {
      submitGuess();
    } else if (e.key === "Backspace") {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < 5) {
      setCurrentGuess(prev => prev + e.key.toLowerCase());
    }
  };

  // Handle virtual keyboard input
  const handleKeyClick = (key: string) => {
    if (gameState !== "playing") return;
    
    if (key === "Enter") {
      submitGuess();
    } else if (key === "Backspace") {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess(prev => prev + key.toLowerCase());
    }
  };

  // Check if the guess is a valid word
  const isValidWord = (word: string) => {
    return WORDS.includes(word);
  };

  // Submit the current guess
  const submitGuess = () => {
    if (currentGuess.length !== 5) {
      setMessage("Word must be 5 letters");
      return;
    }
    
    if (!isValidWord(currentGuess)) {
      setMessage("Not in word list");
      return;
    }
    
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");
    setMessage("");
    
    // Update keyboard state
    updateKeyboardState(currentGuess);
    
    // Check if the player won or lost
    if (currentGuess === secretWord) {
      setGameState("won");
      toast.success("Congratulations! You guessed the word!");
      // Save the result if user is logged in
      if (user) {
        // TODO: Save game result to user profile
      }
    } else if (newGuesses.length >= maxAttempts) {
      setGameState("lost");
      toast.error(`Game over! The word was "${secretWord}"`);
      // Save the result if user is logged in
      if (user) {
        // TODO: Save game result to user profile
      }
    }
  };

  // Update the keyboard state based on the current guess
  const updateKeyboardState = (guess: string) => {
    const newKeyboardState = { ...keyboardState };
    
    // First mark all letters in the guess as absent
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      // Don't downgrade a letter's state
      if (!newKeyboardState[letter] || newKeyboardState[letter] === "unused") {
        newKeyboardState[letter] = "absent";
      }
    }
    
    // Then check for present letters
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      if (secretWord.includes(letter)) {
        // Don't downgrade a letter's state
        if (newKeyboardState[letter] !== "correct") {
          newKeyboardState[letter] = "present";
        }
      }
    }
    
    // Finally, check for correct letters
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      if (secretWord[i] === letter) {
        newKeyboardState[letter] = "correct";
      }
    }
    
    setKeyboardState(newKeyboardState);
  };

  // Get the color for a letter in a guess
  const getLetterColor = (letter: string, index: number, guess: string): LetterState => {
    if (secretWord[index] === letter) {
      return "correct";
    } else if (secretWord.includes(letter)) {
      return "present";
    } else {
      return "absent";
    }
  };

  // Get the background color class for a letter state
  const getColorClass = (state: LetterState) => {
    switch (state) {
      case "correct":
        return "bg-green-500 text-white border-green-600";
      case "present":
        return "bg-yellow-500 text-white border-yellow-600";
      case "absent":
        return "bg-gray-500 text-white border-gray-600";
      default:
        return "bg-white text-gray-800 border-gray-300";
    }
  };

  // Keyboard rows
  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"]
  ];

  return (
    <div className="mb-16">
      <Card className="shadow-lg border-orange-100">
        <CardHeader className="text-center border-b border-gray-200">
          <CardTitle className="text-2xl font-bold text-orange-600">The Master's Words</CardTitle>
          <CardDescription>
            Guess the 5-letter word from Sri Ramakrishna's teachings in 6 tries.
          </CardDescription>
        </CardHeader>
        <CardContent 
          className="pt-6 focus:outline-none" 
          tabIndex={0} 
          onKeyDown={handleKeyDown}
        >
          {/* Game board */}
          <div className="flex flex-col items-center mb-6">
            {/* Display guesses and current input */}
            <div className="mb-4 grid grid-rows-6 gap-2">
              {Array(maxAttempts).fill(null).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-5 gap-2">
                  {Array(5).fill(null).map((_, colIndex) => {
                    const guessedLetter = guesses[rowIndex]?.[colIndex] || "";
                    const isCurrentRow = rowIndex === guesses.length;
                    const currentLetter = isCurrentRow && colIndex < currentGuess.length ? currentGuess[colIndex] : "";
                    const letter = guessedLetter || currentLetter;
                    
                    let cellClass = "w-12 h-12 flex items-center justify-center text-xl font-bold border-2 rounded";
                    
                    if (guessedLetter) {
                      const state = getLetterColor(guessedLetter, colIndex, guesses[rowIndex]);
                      cellClass += " " + getColorClass(state);
                    } else if (currentLetter) {
                      cellClass += " bg-white text-gray-800 border-gray-400";
                    } else {
                      cellClass += " bg-white text-gray-800 border-gray-200";
                    }
                    
                    return (
                      <div key={colIndex} className={cellClass}>
                        {letter.toUpperCase()}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            
            {/* Message display */}
            {message && (
              <div className="mb-4 text-red-500 font-medium">
                {message}
              </div>
            )}
            
            {/* Game state message */}
            {gameState !== "playing" && (
              <div className="mb-4">
                <div className={`text-lg font-bold ${gameState === "won" ? "text-green-600" : "text-red-600"}`}>
                  {gameState === "won" ? "You won!" : `The word was: ${secretWord.toUpperCase()}`}
                </div>
                <Button 
                  onClick={startNewGame} 
                  className="mt-2 bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Play Again
                </Button>
              </div>
            )}
            
            {/* Virtual keyboard */}
            <div className="mt-4 w-full max-w-md">
              {keyboardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-2">
                  {row.map((key) => {
                    let buttonClass = "mx-0.5 rounded font-medium";
                    
                    if (key === "Enter") {
                      buttonClass += " px-2 py-3 text-sm";
                    } else if (key === "Backspace") {
                      buttonClass += " px-2 py-3 text-sm";
                    } else {
                      buttonClass += " w-8 h-10 text-center";
                    }
                    
                    // Apply the state color for letter keys
                    if (key.length === 1) {
                      buttonClass += " " + getColorClass(keyboardState[key] || "unused");
                    } else {
                      buttonClass += " bg-gray-200 text-gray-800";
                    }
                    
                    return (
                      <button
                        key={key}
                        onClick={() => handleKeyClick(key)}
                        className={buttonClass}
                        disabled={gameState !== "playing"}
                      >
                        {key === "Backspace" ? "⌫" : key.toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-sm mt-6">
            <p>Coming soon: More word games based on the teachings of the Holy Trinity.</p>
            {!user && <p className="mt-2">Sign in to save your game progress!</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordleGame;
