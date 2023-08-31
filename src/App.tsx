// App.tsx
import { useState } from "react";
import DateInput from "./components/DateInput";
import TicketInput from "./components/TicketInput";
import DaysInput from "./components/DaysInput";
import NightsInput from "./components/NightsInput";
import Result from "./components/Result";
import TotalExpenditure from "./components/TotalExpenditure";

function App(): JSX.Element {
  const [tripDate, setTripDate] = useState<string>("");
  const [ticketCount, setTicketCount] = useState<number>(0);
  const [daysCount, setDaysCount] = useState<number>(0);
  const [nightsCount, setNightsCount] = useState<number>(0);
  const [ticketPrice, setTicketPrice] = useState<number>(100); // Default ticket price
  const [hotelPrice, setHotelPrice] = useState<number>(120); // Default hotel price

  const calculateSavingsGoal = (): string => {
    // Check if any of the required input fields are NaN
    if (
      isNaN(ticketCount) ||
      isNaN(daysCount) ||
      isNaN(nightsCount) ||
      isNaN(ticketPrice) ||
      isNaN(hotelPrice) ||
      tripDate === ""
    ) {
      return "NaN";
    }

    // Calculate total cost based on user inputs
    const totalCost: number =
      ticketCount * ticketPrice * daysCount + hotelPrice * nightsCount;

    // Calculate weeks until the trip
    const today: Date = new Date();
    const tripDateObj: Date = new Date(tripDate);
    const weeksUntilTrip: number = Math.ceil(
      (tripDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 7)
    );

    // Calculate savings per week
    // const savingsPerWeek: string = (totalCost / weeksUntilTrip).toFixed(2);
    // return savingsPerWeek;

    // Calculate savings per week, per month, and per day
    const savingsPerDay: string = (totalCost / daysCount).toFixed(2);
    const savingsPerWeek: string = (totalCost / weeksUntilTrip).toFixed(2);
    const savingsPerMonth: string = (totalCost / (weeksUntilTrip / 4)).toFixed(
      2
    );

    return `${savingsPerWeek} (per week) - ${savingsPerMonth} (per month) - ${savingsPerDay} (per day)`;
  };

  return (
    <div className="h-screen grid grid-cols-1 content-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-3">
          Disneyland Savings Calculator
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <DateInput tripDate={tripDate} setTripDate={setTripDate} />
            <TicketInput
              ticketCount={ticketCount}
              setTicketCount={setTicketCount}
              ticketPrice={ticketPrice}
              setTicketPrice={setTicketPrice}
            />
            <DaysInput daysCount={daysCount} setDaysCount={setDaysCount} />
            <NightsInput
              nightsCount={nightsCount}
              setNightsCount={setNightsCount}
              hotelPrice={hotelPrice}
              setHotelPrice={setHotelPrice}
            />
          </div>
          <div className="grid justify-items-center bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl text-center">
            {isNaN(parseFloat(calculateSavingsGoal())) ? (
              <p>Please fill in all required fields.</p>
            ) : (
              <>
                <Result savingsGoal={calculateSavingsGoal()} />
                <TotalExpenditure
                  ticketCount={ticketCount}
                  ticketPrice={ticketPrice}
                  daysCount={daysCount}
                  nightsCount={nightsCount}
                  hotelPrice={hotelPrice}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
