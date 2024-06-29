import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Budget from "./components/Budget.jsx";
import Prediction from "./components/Prediction.jsx";

function App() {
  const initialBudget = [
    { name: "Expenses", proportion: 50, detail: [] },
    { name: "Investments", proportion: 20, detail: [] },
    { name: "Other", proportion: 30, detail: [] },
  ];

  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(initialBudget);
  const [investmentGrowth, setInvestmentGrowth] = useState([]);

  const [investment, setInvestment] = useState({
    years: 0,
    initialInvestment: 0,
    monthlyContribution: 0,
    yearlyGrowth: 0,
  });

  useEffect(() => {
    console.log(investment);
  }, [investment]);

  const handleCalculateGrowth = (e) => {
    e.preventDefault();
    setInvestmentGrowth(calculateInvestmentGrowth(investment));
  };

  const handlePredictionFormChange = (field, value) => {
    setInvestment({ ...investment, [field]: value });
  };

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
          investmentGrowth[i].months[k] =
            investment.initialInvestment *
            (1 + investment.yearlyGrowth / 12 / 100);
        } else if (k === 0) {
          investmentGrowth[i].months[k] =
            investmentGrowth[i - 1].months[11] *
              (1 + investment.yearlyGrowth / 12 / 100) +
            investment.monthlyContribution;
        } else {
          investmentGrowth[i].months[k] =
            investmentGrowth[i].months[k - 1] *
              (1 + investment.yearlyGrowth / 12 / 100) +
            investment.monthlyContribution;
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
        investment={income * (budget[1].proportion / 100)}
        handlePredictionFormChange={handlePredictionFormChange}
        investmentGrowth={investmentGrowth}
        handleInvestmentGrowth={handleCalculateGrowth}
      />
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
