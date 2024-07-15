import { useState } from "react";
import styles from "../../styles/components/budget/budgetAddItem.module.css";

export default function BudgetAddItem() {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div>
      {!isAdding ? (
        <button className={styles["add-button"]}>Add New Item</button>
      ) : (
        <>
          <input type="text" />
          <input type="number" />
        </>
      )}
    </div>
  );
}
