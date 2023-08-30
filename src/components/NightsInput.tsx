// NightsInput.tsx
import React, { ChangeEvent } from "react";

interface NightsInputProps {
  nightsCount: number;
  setNightsCount: (count: number) => void;
  hotelPrice: number;
  setHotelPrice: (price: number) => void;
}

const NightsInput: React.FC<NightsInputProps> = ({
  nightsCount,
  setNightsCount,
  hotelPrice,
  setHotelPrice,
}: NightsInputProps) => {
  const handleNightsChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNightsCount(parseInt(e.target.value));
  };

  const handleHotelPriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setHotelPrice(parseFloat(e.target.value));
  };

  return (
    <div>
      <label>Number of Nights at a Hotel:</label>
      <input type="number" value={nightsCount} onChange={handleNightsChange} />
      <label>Hotel Price ($):</label>
      <input
        type="number"
        value={hotelPrice}
        onChange={handleHotelPriceChange}
      />
    </div>
  );
};

export default NightsInput;
