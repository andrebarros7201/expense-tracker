import "./App.css";
import { createContext, useCallback, useEffect, useState } from "react";
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
  });

  useEffect(() => {
    console.log(investment);
  }, [investment]);

  const handleCalculateGrowth = useCallback(
    (values, e) => {
      e.preventDefault();
      const growth = calculateInvestmentGrowth(values);
      const newTotalContribution =
        values.monthlyContribution * 12 * values.years +
        values.initialInvestment;
      const newTotalGrowth =
        growth[growth.length - 1].value - newTotalContribution;

      setInvestment((prevState) => ({
        ...prevState,
        years: values.years,
        initialInvestment: values.initialInvestment,
        monthlyContribution: values.monthlyContribution,
        yearlyGrowth: values.yearlyGrowth,
        growth: growth,
        finalYear: growth[growth.length - 1].value,
        totalGrowth: newTotalGrowth,
        totalContribution: newTotalContribution,
      }));
    },
    [setInvestment],
  );

  const handleIncomeChange = (value) => {
    setIncome(value);
  };

  const calculateInvestmentGrowth = (investment) => {
    let investmentGrowth = [];

    for (let i = 0; i < investment.years; i++) {
      // Initialize the year's data
      investmentGrowth[i] = {
        year: 2024 + i,
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
            investment.initialInvestment *
              (1 + investment.yearlyGrowth / 12 / 100),
          ).toFixed(2);
        } else if (k === 0) {
          investmentGrowth[i].months[k].value = parseFloat(
            investmentGrowth[i - 1].months[11].value *
              (1 + investment.yearlyGrowth / 12 / 100) +
              investment.monthlyContribution,
          ).toFixed(2);
        } else {
          investmentGrowth[i].months[k].value = parseFloat(
            investmentGrowth[i].months[k - 1].value *
              (1 + investment.yearlyGrowth / 12 / 100) +
              investment.monthlyContribution,
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
