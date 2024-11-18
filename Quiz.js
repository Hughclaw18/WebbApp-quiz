import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" },
  { question: "Who is the president of the USA?", options: ["Obama", "Trump", "Biden"], answer: "Biden" },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <div>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleAnswerSelect}
          />
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
