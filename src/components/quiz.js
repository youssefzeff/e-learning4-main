import React, { useState } from 'react';

const questions = [
  {
    question: "Which device is required for the Internet connection?",
    options: ["Modem", "Router", "LAN Cable", "Pen Drive"],
    correctAnswer: "Modem"
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    correctAnswer: "Einstein"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "Which country is the Eiffel Tower located in?",
    options: ["Italy", "Spain", "France", "Germany"],
    correctAnswer: "France"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
    correctAnswer: "Vatican City"
  },
  {
    question: "Which color is not found in the rainbow?",
    options: ["Orange", "Green", "Pink", "Blue"],
    correctAnswer: "Pink"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "HO2"],
    correctAnswer: "H2O"
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      {!quizCompleted ? (
        <div className="question-container">
          <p>
            <strong>Question {currentQuestionIndex + 1}:</strong>{" "}
            {questions[currentQuestionIndex].question}
          </p>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selectedAnswer === option ? "selected" : ""
                }`}
                onClick={() => handleAnswerSelection(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="next-button"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="result-container">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={resetQuiz} className="reset-button">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
