import React, { useState } from "react";
import "./App.css";

// Quiz Data
const questions = [
  {
    question: "Which country has the highest life expectancy?",
    options: ["Japan", "Hong Kong", "Switzerland", "Australia"],
    answer: "Hong Kong",
  },
  {
    question: "What is the most common surname in the United States?",
    options: ["Johnson", "Brown", "Williams", "Smith"],
    answer: "Smith",
  },
  {
    question: "Who was the Ancient Greek God of the Sun?",
    options: ["Zeus", "Apollo", "Hermes", "Poseidon"],
    answer: "Apollo",
  },
  {
    question: "How many minutes are in a full week?",
    options: ["10,000", "10,080", "10,500", "10,200"],
    answer: "10,080",
  },
  {
    question: "Aureolin is a shade of what color?",
    options: ["Blue", "Green", "Yellow", "Red"],
    answer: "Yellow",
  },
  {
    question: "How many faces does a Dodecahedron have?",
    options: ["10", "12", "14", "16"],
    answer: "12",
  },
  {
    question: "What is the 4th letter of the Greek alphabet?",
    options: ["Alpha", "Gamma", "Delta", "Beta"],
    answer: "Delta",
  },
  {
    question: "What company was initially known as 'Blue Ribbon Sports'?",
    options: ["Adidas", "Reebok", "Nike", "Puma"],
    answer: "Nike",
  },
  {
    question: "What art form is described as 'decorative handwriting or handwritten lettering'?",
    options: ["Typography", "Calligraphy", "Graffiti", "Sketching"],
    answer: "Calligraphy",
  },
  {
    question: "What software company is headquartered in Redmond, Washington?",
    options: ["Apple", "Google", "Microsoft", "Amazon"],
    answer: "Microsoft",
  },
  {
    question: "How many dots appear on a pair of dice?",
    options: ["42", "48", "36", "40"],
    answer: "42",
  },
  {
    question: "What is acrophobia a fear of?",
    options: ["Closed spaces", "Spiders", "Heights", "Flying"],
    answer: "Heights",
  },
  {
    question: "December 26 is known by what name in Ireland?",
    options: ["Boxing Day", "Saint Stephen's Day", "Yule", "Feast Day"],
    answer: "Saint Stephen's Day",
  },
  {
    question: "What phone company produced the 3310?",
    options: ["Nokia", "Motorola", "Samsung", "Sony"],
    answer: "Nokia",
  },
  {
    question: "What is the world’s largest retailer?",
    options: ["Amazon", "Walmart", "Alibaba", "Target"],
    answer: "Walmart",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = questions[currentQuestion];

  const handleOptionClick = (option) => {
    if (selectedOption !== null) return; // Prevent further clicks after selection
    setSelectedOption(option);

    if (option === question.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  return (
    <div className="quiz-container">
      <header>
        <h1>Quiz App</h1>
      </header>

      <div className="question-info">
        Question {currentQuestion + 1}/{questions.length}
      </div>

      <div id="quiz-content">
        <h2>{question.question}</h2>

        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedOption === option
                  ? option === question.answer
                    ? "selected"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null} // Disable buttons after selection
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="controls">
        <button
          className="control-btn"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        {currentQuestion === questions.length - 1 ? (
          <button className="control-btn" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="control-btn" onClick={handleNext}>
            Next
          </button>
        )}
      </div>

      {isSubmitted && (
        <div id="result-popup" className="visible">
          <div className="popup-content">
            <h3>Your Score: {score} / {questions.length}</h3>
            <p>{score >= questions.length / 2 ? "Pass" : "Fail"}</p>
            <button id="close-popup" onClick={resetQuiz}>
              Restart Quiz
            </button>
          </div>
        </div>
      )}

      <footer>
        <p>Quiz App by Prajeet Ragav R</p>
      </footer>
    </div>
  );
}

export default App;
