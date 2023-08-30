// TotalExpenditure.tsx
import React from "react";

interface TotalExpenditureProps {
  ticketCount: number;
  ticketPrice: number;
  daysCount: number;
  nightsCount: number;
  hotelPrice: number;
}

const TotalExpenditure: React.FC<TotalExpenditureProps> = ({
  ticketCount,
  ticketPrice,
  daysCount,
  nightsCount,
  hotelPrice,
}: TotalExpenditureProps) => {
  const calculateTotalCost = (): number => {
    return ticketCount * ticketPrice * daysCount + hotelPrice * nightsCount;
  };

  return (
    <div>
      <h2>Total Estimated Expenditure:</h2>
      <p>${calculateTotalCost().toFixed(2)}</p>
    </div>
  );
};

export default TotalExpenditure;
