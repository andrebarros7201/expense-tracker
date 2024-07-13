import styles from "../../styles/components/budget/budgetCrud.module.css";
import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import BudgetCRUDItem from "./BudgetCRUDItem.jsx";

export default function BudgetCRUD() {
  const { budget } = useContext(AppContext);
  return (
    <section className={styles["budgetCRUD"]}>
      {budget.map((item) => (
        <BudgetCRUDItem item={item} key={item.name} />
      ))}
    </section>
  );
}
