import styles from "./BudgetIncome.module.scss";
import { useContext } from "react";
import { BudgetContext } from "../../Budget.jsx";

export default function BudgetIncome() {
  const { income, setIncome } = useContext(BudgetContext);

  function handleChangeIncome(value) {
    setIncome(value);
  }

  return (
    <span className={styles["income"]}>
      <label htmlFor={"income"} className={styles["income__label"]}>
        Income
      </label>
      <input
        value={income}
        type={"number"}
        min={0}
        onChange={(e) => handleChangeIncome(Number(e.target.value))}
        className={styles["income__input"]}
      />
    </span>
  );
}
