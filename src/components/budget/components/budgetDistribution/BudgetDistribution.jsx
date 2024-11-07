import { useContext } from "react";
import "../budget.module.scss";
import PropTypes from "prop-types";
import { BudgetContext } from "../../Budget.jsx";

export default function BudgetDistribution() {
  const { income, budget, handleIncomeChange } = useContext(BudgetContext);

  return <section></section>;
}

BudgetDistribution.propTypes = {
  income: PropTypes.number,
  budget: PropTypes.array,
  handleIncoming: PropTypes.func,
};
