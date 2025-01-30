import "../../styles/main.scss";
import styles from "./budget.module.scss";
import BudgetDistribution from "./components/budgetDistribution/BudgetDistribution.jsx";
import BudgetAddItemForm from "./components/budgetAddItem/BudgetAddItemForm.jsx";
import BudgetIncome from "./components/budgetIncome/BudgetIncome.jsx";

export default function Budget() {
  return (
    <main className={"container"}>
      <h3>Monthly Budget</h3>
      <div className={styles["budget__container"]}>
        <BudgetDistribution />
        <BudgetIncome />
        <BudgetAddItemForm />
      </div>
    </main>
  );
}
