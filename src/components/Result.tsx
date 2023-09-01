// Result.tsx
import React from "react";

interface ResultProps {
  savingsGoal: string;
}

const Result: React.FC<ResultProps> = ({ savingsGoal }: ResultProps) => {
  const isValidInput = !isNaN(parseFloat(savingsGoal));

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-2">💰 Your Savings Goal:</h2>
      {isValidInput ? (
        <div>
          <p className="text-2xl">
            ${(parseFloat(savingsGoal) / 7).toFixed(2)} per day
          </p>
          <p className="text-2xl">
            ${parseFloat(savingsGoal).toFixed(2)} per week
          </p>
          <p className="text-2xl">
            ${(parseFloat(savingsGoal) * 4).toFixed(2)} per month
          </p>
        </div>
      ) : (
        <div>
          <p>- per day</p>
          <p>- per week</p>
          <p>- per month</p>
        </div>
      )}
    </div>
  );
};

export default Result;
