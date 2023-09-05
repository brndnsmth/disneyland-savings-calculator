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
    const inputVal = parseInt(e.target.value);
    if (!isNaN(inputVal)) {
      // Only update the state if the input is a valid number
      setNightsCount(inputVal);
    }
  };

  const handleHotelPriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputVal = parseFloat(e.target.value);
    if (!isNaN(inputVal)) {
      // Only update the state if the input is a valid number
      setHotelPrice(inputVal);
    }
  };

  return (
    <div>
      <label className="font-semibold">🏨 Number of Nights at a Hotel:</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={isNaN(nightsCount) ? "" : nightsCount}
        onChange={handleNightsChange}
        min="0"
      />
      <label className="font-semibold">﹩ Hotel Price ($):</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={isNaN(hotelPrice) ? "" : hotelPrice}
        onChange={handleHotelPriceChange}
        min="0"
      />
    </div>
  );
};

export default NightsInput;
