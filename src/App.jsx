import "./App.css";
import { useState } from "react";
import Budget from "./components/Budget.jsx";

function App() {
  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState([
    { name: "Expenses", proportion: 50, detail: [] },
    { name: "Investments", proportion: 20, detail: [] },
    { name: "Other", proportion: 30, detail: [] },
  ]);

  const handleIncomeChange = (value) => {
    setIncome(value);
  };
  return (
    <div className={"app"}>
      <Budget
        income={income}
        budget={budget}
        incomeChange={handleIncomeChange}
      />

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
