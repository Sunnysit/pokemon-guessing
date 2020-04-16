import React from 'react';

type ScoreProp = {
  score: number;
};

const Score: React.FC<ScoreProp> = ({ score }) => {
  return (
    <div className='score-container'>
      <p>Score {score}</p>
    </div>
  );
};

export default Score;
