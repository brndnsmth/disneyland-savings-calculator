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
      <label>Trip Date:</label>
      <input type="date" value={tripDate} onChange={handleDateChange} />
    </div>
  );
};

export default DateInput;
