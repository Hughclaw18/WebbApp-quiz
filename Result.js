import React from 'react';

function Result({ score, total }) {
  return (
    <div>
      <h2>Quiz Finished!</h2>
      <p>Your score: {score} / {total}</p>
    </div>
  );
}

export default Result;
