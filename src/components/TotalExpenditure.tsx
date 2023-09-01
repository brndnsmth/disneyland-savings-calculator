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
      <h2 className="text-3xl font-semibold mb-2">
        💸 Total Estimated Expenditure:
      </h2>
      <p className="text-2xl">${calculateTotalCost().toFixed(2)}</p>
    </div>
  );
};

export default TotalExpenditure;
