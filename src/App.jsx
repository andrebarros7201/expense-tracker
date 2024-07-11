import "./App.css";
import { createContext, useCallback, useState } from "react";
import Budget from "./components/Budget.jsx";
import Prediction from "./components/Prediction.jsx";
import Details from "./components/Details.jsx";
import { calculateInvestmentGrowth } from "./utils/calculateInvestmentGrowth.js";

export const AppContext = createContext(null);

function App() {
  const initialBudget = [
    { name: "Expenses", proportion: 50, detail: [] },
    { name: "Investments", proportion: 20, detail: [] },
    { name: "Other", proportion: 30, detail: [] },
  ];

  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(initialBudget);

  const [investment, setInvestment] = useState({
    years: 0,
    initialInvestment: 0,
    monthlyContribution: 0,
    yearlyGrowth: 0,
    growth: [],
    finalYear: 0,
    totalGrowth: 0,
    totalContribution: 0,
    fireFourPercent: 0,
    fireMonthlyIncome: 0,
  });

  const handleCalculateGrowth = useCallback((values, e) => {
    e.preventDefault();

    // Calculate growth and contributions
    const growth = calculateInvestmentGrowth(values);

    // Set the new investment state
    setInvestment((prevState) => {
      const newTotalContribution =
        values.monthlyContribution * 12 * values.years +
        values.initialInvestment;
      const newTotalGrowth =
        growth[growth.length - 1].value - newTotalContribution;

      // Final value for the investment after growth
      const finalYearValue = growth[growth.length - 1].value;
      const newFireFourPercent = finalYearValue * 0.04;
      const newFireMonthlyIncome = newFireFourPercent / 12;

      return {
        ...prevState,
        years: values.years,
        initialInvestment: values.initialInvestment,
        monthlyContribution: values.monthlyContribution,
        yearlyGrowth: values.yearlyGrowth,
        growth: growth,
        finalYear: finalYearValue,
        totalGrowth: newTotalGrowth,
        totalContribution: newTotalContribution,
        fireFourPercent: newFireFourPercent,
        fireMonthlyIncome: newFireMonthlyIncome,
      };
    });
  }, []);

  const handleIncomeChange = (value) => {
    setIncome(value);
  };

  return (
    <div className={"app"}>
      <AppContext.Provider
        value={{
          income,
          budget,
          handleIncomeChange,
          investment,
          handleCalculateGrowth,
        }}
      >
        <Budget />
        <Prediction />
        <Details />
      </AppContext.Provider>
    </div>
  );
}

export default App;
