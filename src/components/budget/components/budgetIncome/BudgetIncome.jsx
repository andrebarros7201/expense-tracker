import styles from "./BudgetIncome.module.scss";
import "../../../../styles/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { BudgetActions } from "../../../../store/budgetSlicer.js";

export default function BudgetIncome() {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.budget.income);
  const { theme } = useSelector((state) => state.theme);

  function handleChangeIncome(value) {
    dispatch(BudgetActions.setIncome({ income: value }));
  }

  return (
    <span
      className={`wrapper ${theme === "dark" ? "dark-theme" : ""} ${styles["income"]}`}
    >
      <label htmlFor={"income"} className={"form__label"}>
        Income
      </label>
      <input
        value={income}
        type={"number"}
        min={0}
        step={10}
        onChange={(e) => handleChangeIncome(Number(e.target.value))}
        className={"form__input"}
      />
    </span>
  );
}
