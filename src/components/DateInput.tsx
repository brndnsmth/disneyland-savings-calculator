// DateInput.tsx
import React, { ChangeEvent } from "react";

interface DateInputProps {
  tripDate: string;
  setTripDate: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({
  tripDate,
  setTripDate,
}: DateInputProps) => {
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTripDate(e.target.value);
  };

  return (
    <div>
      <label className="font-semibold">🗓 Trip Date:</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="date"
        value={tripDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateInput;
