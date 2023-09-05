import React, { ChangeEvent } from "react";

interface TicketInputProps {
  ticketCount: number;
  setTicketCount: (count: number) => void;
  ticketPrice: number;
  setTicketPrice: (price: number) => void;
}

const TicketInput: React.FC<TicketInputProps> = ({
  ticketCount,
  setTicketCount,
  ticketPrice,
  setTicketPrice,
}: TicketInputProps) => {
  const handleTicketChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputVal = parseInt(e.target.value);
    if (!isNaN(inputVal)) {
      // Only update the state if the input is a valid number
      setTicketCount(inputVal);
    } else {
      // Clear the input field if the value is not a valid number
      setTicketCount(0);
    }
  };

  const handleTicketPriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputVal = parseFloat(e.target.value);
    if (!isNaN(inputVal)) {
      // Only update the state if the input is a valid number
      setTicketPrice(inputVal);
    } else {
      // Clear the input field if the value is not a valid number
      setTicketPrice(0);
    }
  };

  return (
    <div>
      <label className="font-semibold">
        🎟 Number of Disneyland Tickets (Standard One Park Ticket):
      </label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={ticketCount === 0 ? "" : ticketCount}
        onChange={handleTicketChange}
        min="0"
        inputMode="numeric" // Enable numeric keyboard
      />
      <label className="font-semibold">﹩ Ticket Price ($):</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={ticketPrice === 0 ? "" : ticketPrice}
        onChange={handleTicketPriceChange}
        min="0"
        inputMode="numeric" // Enable numeric keyboard
      />
    </div>
  );
};

export default TicketInput;
