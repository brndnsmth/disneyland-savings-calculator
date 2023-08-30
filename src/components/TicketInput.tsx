// TicketInput.tsx
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
    setTicketCount(parseInt(e.target.value));
  };

  const handleTicketPriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTicketPrice(parseFloat(e.target.value));
  };

  return (
    <div>
      <label className="font-semibold">🎟 Number of Disneyland Tickets:</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={ticketCount}
        onChange={handleTicketChange}
        min="0"
      />
      <label className="font-semibold">﹩ Ticket Price ($):</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={ticketPrice}
        onChange={handleTicketPriceChange}
      />
    </div>
  );
};

export default TicketInput;
