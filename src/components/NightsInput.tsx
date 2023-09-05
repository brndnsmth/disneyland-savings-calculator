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
    } else {
      // Clear the input field if the value is not a valid number
      setNightsCount(0);
    }
  };

  const handleHotelPriceChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputVal = parseFloat(e.target.value);
    if (!isNaN(inputVal)) {
      // Only update the state if the input is a valid number
      setHotelPrice(inputVal);
    } else {
      // Clear the input field if the value is not a valid number
      setHotelPrice(0);
    }
  };

  return (
    <div>
      <label className="font-semibold">🏨 Number of Nights at a Hotel:</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={nightsCount === 0 ? "" : nightsCount}
        onChange={handleNightsChange}
        min="0"
        inputMode="numeric" // Enable numeric keyboard
      />
      <label className="font-semibold">﹩ Hotel Price ($):</label>
      <input
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
        type="number"
        value={hotelPrice === 0 ? "" : hotelPrice}
        onChange={handleHotelPriceChange}
        min="0"
        inputMode="numeric" // Enable numeric keyboard
      />
    </div>
  );
};

export default NightsInput;
