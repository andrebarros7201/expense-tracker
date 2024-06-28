import PropTypes from "prop-types";
import "../styles/budget.css";

export default function Budget({ income, budget, incomeChange }) {
  return (
    <div className={"budget"}>
      <h2>Budget</h2>
      <input
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
    </div>
  );
}

Budget.propTypes = {
  income: PropTypes.number,
  budget: PropTypes.array.isRequired,
  incomeChange: PropTypes.func.isRequired,
};
