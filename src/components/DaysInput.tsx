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
      <label className="font-semibold">🎡 Number of Days at Disneyland:</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
        type="number"
        value={daysCount}
        onChange={handleDaysChange}
        min="0"
      />
    </div>
  );
};

export default DaysInput;
