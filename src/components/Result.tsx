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

  // Define variables to determine whether to show per day, week, and per month
  const showPerDay = daysUntilTrip >= 1;
  const showPerWeek = daysUntilTrip >= 7;
  const showPerMonth = daysUntilTrip >= 30;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-2">💰 Your Savings Goal:</h2>
      {isValidInput ? (
        <div>
          <p className="text-2xl">
            {showPerDay ? `$${savingsPerDay} per day` : "- per day"}
          </p>
          <p className="text-2xl">
            {showPerWeek ? `$${savingsPerWeek} per week` : "- per week"}
          </p>
          <p className="text-2xl">
            {showPerMonth ? `$${savingsPerMonth} per month` : "- per month"}
          </p>
        </div>
      ) : (
        <div>
          {!showPerDay && <p>- per day</p>}
          {!showPerWeek && <p>- per week</p>}
          {!showPerMonth && <p>- per month</p>}
        </div>
      )}
    </div>
  );
};

export default Result;
