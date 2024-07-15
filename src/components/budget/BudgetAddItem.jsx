import { useState } from "react";
import styles from "../../styles/components/budget/budgetAddItem.module.css";

export default function BudgetAddItem() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className={styles["budgetAddItem"]}>
      {!isAdding ? (
        <button
          className={styles["add-button"]}
          onClick={() => {
            setIsAdding(true);
          }}
        >
          Add New Item
        </button>
      ) : (
        <>
          <input type="text" placeholder={"Name"} />
          <input type="number" placeholder={"Proportion"} />
          <button className={styles["save-button"]}>Save</button>
        </>
      )}
    </div>
  );
}
