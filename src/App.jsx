import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Budget from "./components/Budget.jsx";
import Prediction from "./components/Prediction.jsx";
import Details from "./components/Details.jsx";

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
        values.monthlyContribution * 12 * values.years;
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
        months: Array(12).fill(0),
      };

      for (let k = 0; k < 12; k++) {
        if (i === 0 && k === 0) {
          investmentGrowth[i].months[k] = parseFloat(
            investment.initialInvestment *
              (1 + investment.yearlyGrowth / 12 / 100),
          ).toFixed(2);
        } else if (k === 0) {
          investmentGrowth[i].months[k] = parseFloat(
            investmentGrowth[i - 1].months[11] *
              (1 + investment.yearlyGrowth / 12 / 100) +
              investment.monthlyContribution,
          ).toFixed(2);
        } else {
          investmentGrowth[i].months[k] = parseFloat(
            investmentGrowth[i].months[k - 1] *
              (1 + investment.yearlyGrowth / 12 / 100) +
              investment.monthlyContribution,
          ).toFixed(2);
        }
      }

      // At the end of each year, set the year's value to the last month's value
      investmentGrowth[i].value = investmentGrowth[i].months[11];
    }

    return investmentGrowth;
  };

  return (
    <div className={"app"}>
      <Budget
        income={income}
        budget={budget}
        incomeChange={handleIncomeChange}
      />

      <Prediction
        investment={investment}
        handleCalculateGrowth={handleCalculateGrowth}
      />
      <Details />
    </div>
  );
}

export default App;
