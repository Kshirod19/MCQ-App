import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./data/questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRetake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* App Header */}
      <header className="w-full max-w-5xl py-4 bg-blue-500 text-white text-center shadow-md">
        <h1 className="text-2xl font-bold">MCQ App</h1>
      </header>

      {/* App Content */}
      <div className="w-full max-w-md p-6 mt-6 bg-white shadow-lg rounded-md">
        {showScore ? (
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-green-500">
              Your Score: {score}/{questions.length}
            </h1>
            <button
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={handleRetake}
            >
              Retake MCQ
            </button>
          </div>
        ) : (
          <QuestionCard
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
