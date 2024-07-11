import "./App.css";
import { createContext, useCallback, useState } from "react";
import Budget from "./components/Budget.jsx";
import Prediction from "./components/Prediction.jsx";
import Details from "./components/Details.jsx";

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

  const calculateInvestmentGrowth = ({
    initialInvestment,
    monthlyContribution,
    yearlyGrowth,
    years,
  }) => {
    let investmentGrowth = [];

    for (let i = 0; i < years; i++) {
      // Initialize the year's data
      investmentGrowth[i] = {
        year: new Date().getFullYear() + i,
        value: 0,
        months: [
          { month: "January", value: null },
          { month: "February", value: null },
          { month: "March", value: null },
          { month: "April", value: null },
          { month: "May", value: null },
          { month: "June", value: null },
          { month: "July", value: null },
          { month: "August", value: null },
          { month: "September", value: null },
          { month: "October", value: null },
          { month: "November", value: null },
          { month: "December", value: null },
        ],
      };

      for (let k = 0; k < 12; k++) {
        if (i === 0 && k === 0) {
          investmentGrowth[i].months[k].value = parseFloat(
            (monthlyContribution + initialInvestment) *
              (1 + yearlyGrowth / 12 / 100),
          ).toFixed(2);
        } else if (k === 0) {
          investmentGrowth[i].months[k].value = parseFloat(
            investmentGrowth[i - 1].months[11].value *
              (1 + yearlyGrowth / 12 / 100) +
              monthlyContribution,
          ).toFixed(2);
        } else {
          investmentGrowth[i].months[k].value = parseFloat(
            investmentGrowth[i].months[k - 1].value *
              (1 + yearlyGrowth / 12 / 100) +
              monthlyContribution,
          ).toFixed(2);
        }
      }

      investmentGrowth[i].value = investmentGrowth[i].months[11].value;
    }

    return investmentGrowth;
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
