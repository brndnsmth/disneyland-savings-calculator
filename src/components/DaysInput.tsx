// DaysInput.tsx
import React, { ChangeEvent } from "react";

interface DaysInputProps {
  daysCount: number;
  setDaysCount: (count: number) => void;
}

const DaysInput: React.FC<DaysInputProps> = ({
  daysCount,
  setDaysCount,
}: DaysInputProps) => {
  const handleDaysChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDaysCount(parseInt(e.target.value));
  };

  return (
    <div>
      <label>Number of Days at Disneyland:</label>
      <input type="number" value={daysCount} onChange={handleDaysChange} />
    </div>
  );
};

export default DaysInput;
