import styles from "../styles/pages/budget.module.css";
import containerPage from "../styles/pages/containerPage.module.css";
import BudgetDistribution from "../components/budget/BudgetDistribution.jsx";
import BudgetTable from "../components/budget/BudgetTable.jsx";

export default function Budget() {
  return (
    <main className={containerPage["container-main"]}>
      <h2>Monthly Budget</h2>
      <div
        className={`${containerPage["container-components"]}  ${styles["budget-components"]}`}
      >
        <BudgetDistribution />
        <BudgetTable />
      </div>
    </main>
  );
}
