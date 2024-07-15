import BudgetDivision from "../components/budget/BudgetDivision.jsx";
import styles from "../styles/pages/budget.module.css";
import BudgetTable from "../components/budget/BudgetTable.jsx";

export default function Budget() {
  return (
    <main className={styles["budget-main"]}>
      <h2>Monthly Budget</h2>
      <div className={styles["budget-components"]}>
        <BudgetDivision />
        <BudgetTable />
      </div>
    </main>
  );
}
