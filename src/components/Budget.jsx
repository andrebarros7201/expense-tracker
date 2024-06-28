import PropTypes from "prop-types";
import styles from "../styles/budget.module.css";

export default function Budget({ income, budget, incomeChange }) {
  return (
    <section className={styles["budget"]}>
      <h2>Budget</h2>
      <input
        className={styles["budget-input"]}
        type="number"
        onChange={(e) => incomeChange(Number(e.target.value))}
        placeholder="Income"
      />
      <h3>Distribution</h3>
      <ul>
        {budget.map((budget) => (
          <li key={budget.name}>
            {budget.name}: {income * (budget.proportion / 100)} €
          </li>
        ))}
      </ul>
    </section>
  );
}

Budget.propTypes = {
  income: PropTypes.number,
  budget: PropTypes.array.isRequired,
  incomeChange: PropTypes.func.isRequired,
};
