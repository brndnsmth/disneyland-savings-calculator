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
    const selectedDate = e.target.value;
    const currentDate = new Date();

    // Parse the selected date to a Date object
    const selectedDateObj = new Date(selectedDate);

    // Check if the selected date is in the past
    if (selectedDateObj < currentDate) {
      // Display an error message
      alert("Please select a future date.");
    } else {
      // Set the tripDate state only if it's a future date
      setTripDate(selectedDate);
    }
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
