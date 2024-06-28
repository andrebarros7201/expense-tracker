import "./App.css";
import { useState } from "react";
import Budget from "./components/Budget.jsx";
import Prediction from "./components/Prediction.jsx";

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

      <Prediction investment={income * (budget[1].proportion / 100)} />
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
