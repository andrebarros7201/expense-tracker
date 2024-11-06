import styles from "./budget.module.css";
import BudgetDistribution from "./components/BudgetDistribution.jsx";
import BudgetTable from "./components/BudgetTable.jsx";

export default function Budget() {
  return (
    <main>
      <h2>Monthly Budget</h2>
      <div className={`${styles["budget-components"]}`}>
        <BudgetDistribution />
        <BudgetTable />
      </div>
    </main>
  );
}
