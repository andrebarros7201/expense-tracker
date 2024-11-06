import styles from "./budget.module.scss";
import BudgetDistribution from "./components/budgetDistribution/BudgetDistribution.jsx";
import BudgetTable from "./components/budgetTable/BudgetTable.jsx";

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
