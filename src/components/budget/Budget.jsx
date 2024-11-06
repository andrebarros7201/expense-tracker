import styles from "../../styles/pages/budget.module.css";
import containerPage from "../../styles/container/containerPage.module.css";
import BudgetDistribution from "./BudgetDistribution.jsx";
import BudgetTable from "./BudgetTable.jsx";

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
