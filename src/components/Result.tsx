// Result.tsx
import React from "react";

interface ResultProps {
  savingsPerDay: string;
  savingsPerWeek: string;
  savingsPerMonth: string;
  tripDate: string;
}

const Result: React.FC<ResultProps> = ({
  savingsPerDay,
  savingsPerWeek,
  savingsPerMonth,
  tripDate,
}: ResultProps) => {
  const isValidInput = !isNaN(parseFloat(savingsPerDay));

  // Parse the trip date to a Date object
  const tripDateObj = new Date(tripDate);
  const currentDate = new Date();

  // Calculate the time difference in days between tripDate and currentDate
  const daysUntilTrip = Math.ceil(
    (tripDateObj.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Define variables to determine whether to show per week and per month
  const showPerWeek = daysUntilTrip >= 7;
  const showPerMonth = daysUntilTrip >= 30;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-2">💰 Your Savings Goal:</h2>
      {isValidInput ? (
        <div>
          <p className="text-2xl">${savingsPerDay} per day</p>
          {showPerWeek && (
            <p className="text-2xl">${savingsPerWeek} per week</p>
          )}
          {showPerMonth && (
            <p className="text-2xl">${savingsPerMonth} per month</p>
          )}
        </div>
      ) : (
        <div>
          <p>- per day</p>
          {!showPerWeek && <p>- per week</p>}
          {!showPerMonth && <p>- per month</p>}
        </div>
      )}
    </div>
  );
};

export default Result;
