// App.tsx
import { useState } from "react";
import DateInput from "./components/DateInput";
import TicketInput from "./components/TicketInput";
import DaysInput from "./components/DaysInput";
import NightsInput from "./components/NightsInput";
import Result from "./components/Result";
import TotalExpenditure from "./components/TotalExpenditure";
import mickey from "./assets/mickey.png";

function App(): JSX.Element {
  const [tripDate, setTripDate] = useState<string>("");
  const [ticketCount, setTicketCount] = useState<number>(0);
  const [daysCount, setDaysCount] = useState<number>(0);
  const [nightsCount, setNightsCount] = useState<number>(0);
  const [ticketPrice, setTicketPrice] = useState<number>(100); // Default ticket price
  const [hotelPrice, setHotelPrice] = useState<number>(120); // Default hotel price

  // Calculate savingsPerDay, savingsPerWeek, and savingsPerMonth
  const calculateSavingsGoal = (): {
    savingsPerDay: string;
    savingsPerWeek: string;
    savingsPerMonth: string;
  } => {
    // Check if any of the required input fields are NaN
    /*if (
      isNaN(ticketCount) ||
      isNaN(daysCount) ||
      isNaN(nightsCount) ||
      isNaN(ticketPrice) ||
      isNaN(hotelPrice) ||
      tripDate === ""
    ) {
      return {
        savingsPerDay: "NaN",
        savingsPerWeek: "NaN",
        savingsPerMonth: "NaN",
      };
    } */

    // Calculate total cost based on user inputs
    const totalCost: number =
      ticketCount * ticketPrice * daysCount + hotelPrice * nightsCount;

    // Calculate weeks until the trip
    const today: Date = new Date();
    const tripDateObj: Date = new Date(tripDate);
    const daysUntilTrip: number = Math.ceil(
      (tripDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Calculate savings per day
    const savingsPerDay: string = (totalCost / daysUntilTrip).toFixed(2);
    // console.log(savingsPerDay);

    // Calculate savings per week and per month
    const savingsPerWeek: string = ((totalCost / daysUntilTrip) * 7).toFixed(2);
    // console.log(savingsPerWeek);
    const savingsPerMonth: string = ((totalCost / daysUntilTrip) * 30).toFixed(
      2
    );
    // console.log(savingsPerMonth);

    return {
      savingsPerDay,
      savingsPerWeek,
      savingsPerMonth,
    };
  };

  // Calculate savings values
  const { savingsPerDay, savingsPerWeek, savingsPerMonth } =
    calculateSavingsGoal();

  const resetFields = () => {
    setTripDate("");
    setTicketCount(0);
    setDaysCount(0);
    setNightsCount(0);
    setTicketPrice(100); // Default ticket price
    setHotelPrice(120); // Default hotel price

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 content-center m-2">
      <div className="container mx-auto">
        <div className="flex items-center">
          <h1 className="text-6xl font-disney font-semibold text-white drop-shadow-md">
            Disneyland Savings Calculator
          </h1>
          <img
            className="rotate-image drop-shadow-md"
            src={mickey}
            width="100px"
            alt="Mickey Mouse"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white drop-shadow-md mb-3">
          Anaheim, CA
        </h2>
        <p className="text-white mb-3">
          Calculate how much money should be saved per day, week, or month to
          afford a trip to Disneyland in Anaheim, California. However, one
          aspect that visitors should be aware of when planning their trip is
          how Disneyland ticket prices can fluctuate throughout the year. View
          current{" "}
          <a
            className="text-amber-200 hover:underline"
            href="https://disneyland.disney.go.com/admission/tickets/"
            target="_blank"
          >
            Disneyland ticket prices
          </a>
          .
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
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
            {isNaN(parseFloat(savingsPerDay)) ||
            isNaN(parseFloat(savingsPerWeek)) ||
            isNaN(parseFloat(savingsPerMonth)) ? (
              <p className="text-2xl flex items-center">
                Please fill in all fields.
              </p>
            ) : (
              <>
                <Result
                  savingsPerDay={savingsPerDay}
                  savingsPerWeek={savingsPerWeek}
                  savingsPerMonth={savingsPerMonth}
                  tripDate={tripDate}
                />
                <hr className="w-48 h-1 mx-auto my-4 bg-blue-300 border-0 rounded" />
                <TotalExpenditure
                  ticketCount={ticketCount}
                  ticketPrice={ticketPrice}
                  daysCount={daysCount}
                  nightsCount={nightsCount}
                  hotelPrice={hotelPrice}
                />
                <div className="text-center mt-4">
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                    onClick={resetFields}
                  >
                    Reset
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <p className="text-white mb-3">
          <span className="font-bold">Disclaimer:</span> It's important to note
          that the savings calculator provided here is merely an estimator and
          does not represent the actual price you would pay for Disneyland
          tickets. The actual cost of admission can vary significantly depending
          on the factors mentioned above. Therefore, it's advisable to check the
          official Disneyland Resort website or contact the park directly for
          the most accurate and up-to-date pricing information before planning
          your trip. Disneyland's pricing strategy is designed to accommodate
          various budgets and preferences, ensuring that the magic of Disney
          remains accessible to all visitors.
        </p>
        <p className="text-white">
          Mickey Mouse and all related characters and elements are trademarks of
          and copyright Disney Enterprises, Inc.
        </p>
      </div>
    </div>
  );
}

export default App;
