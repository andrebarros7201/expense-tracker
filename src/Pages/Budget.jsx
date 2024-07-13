import PropTypes from "prop-types";
import styles from "../styles/budget.module.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";

export default function Budget() {
  const { income, budget, handleIncomeChange } = useContext(AppContext);
  return (
    <main>
      <h2>Monthly Budget</h2>
      <section className={styles["budget"]}>
        <input
          className={styles["budget-input"]}
          type="number"
          onChange={(e) => handleIncomeChange(Number(e.target.value))}
          placeholder="Income"
        />
        <h3>Distribution</h3>
        <ul>
          {budget.map((budget) => (
            <li key={budget.name}>
              ({budget.proportion}%) {budget.name}:{" "}
              {income * (budget.proportion / 100)} €
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

Budget.propTypes = {
  income: PropTypes.number,
  budget: PropTypes.array,
  handleIncoming: PropTypes.func,
};
