import React from "react";

const QuestionCard = ({ question, handleAnswer }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-lg font-semibold text-center sm:text-xl lg:text-2xl">
        {question.text}
      </h2>
      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="w-full px-4 py-2 text-sm font-medium text-white transition bg-blue-500 rounded-lg hover:bg-blue-600 sm:text-base lg:text-lg"
            onClick={() => handleAnswer(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
