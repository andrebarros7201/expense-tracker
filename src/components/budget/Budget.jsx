import { useSelector } from "react-redux";
import { useEffect } from "react";

import BudgetDistribution from "./components/budgetDistribution/BudgetDistribution.jsx";
import BudgetAddItemForm from "./components/budgetAddItem/BudgetAddItemForm.jsx";
import BudgetIncome from "./components/budgetIncome/BudgetIncome.jsx";

import "../../styles/main.scss";
import styles from "./budget.module.scss";

export default function Budget() {
  const budget = useSelector((state) => state.budget);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);

  return (
    <main className={"container"}>
      <h3 className={`${theme === "dark" ? "dark-text" : ""}`}>
        Monthly Budget
      </h3>
      <div className={styles["budget__container"]}>
        <BudgetDistribution />
        <BudgetIncome />
        <BudgetAddItemForm />
      </div>
    </main>
  );
}
