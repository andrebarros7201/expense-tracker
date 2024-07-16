import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import containerComponent from "../../styles/container/containerComponent.module.css";
import "../../styles/components/budget.module.css";
import PropTypes from "prop-types";
import Budget from "../../pages/Budget.jsx";

export default function BudgetDistribution() {
  const { income, budget, handleIncomeChange } = useContext(AppContext);

  return (
    <section className={containerComponent["container-component"]}>
      <input
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
  );
}

Budget.propTypes = {
  income: PropTypes.number,
  budget: PropTypes.array,
  handleIncoming: PropTypes.func,
};
