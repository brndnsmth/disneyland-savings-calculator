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
      <label>Number of Disneyland Tickets:</label>
      <input type="number" value={ticketCount} onChange={handleTicketChange} />
      <label>Ticket Price ($):</label>
      <input
        type="number"
        value={ticketPrice}
        onChange={handleTicketPriceChange}
      />
    </div>
  );
};

export default TicketInput;
