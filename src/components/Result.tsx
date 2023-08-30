// Result.tsx
import React from "react";

interface ResultProps {
  savingsGoal: string;
}

const Result: React.FC<ResultProps> = ({ savingsGoal }: ResultProps) => {
  const isValidInput = !isNaN(parseFloat(savingsGoal));

  return (
    <div>
      <h2>Your Savings Goal:</h2>
      {isValidInput ? (
        <div>
          <p>${parseFloat(savingsGoal).toFixed(2)} per week</p>
          <p>${(parseFloat(savingsGoal) * 4).toFixed(2)} per month</p>
        </div>
      ) : (
        <div>
          <p>- per week</p>
          <p>- per month</p>
        </div>
      )}
    </div>
  );
};

export default Result;
