import { useContext } from "react";
import styles from "./BudgetDistribution.module.scss";
import PropTypes from "prop-types";
import { BudgetContext } from "../../Budget.jsx";

export default function BudgetDistribution() {
  const { budget, income, expenseCategories } = useContext(BudgetContext);

  return (
    <section className={styles["distribution"]}>
      {expenseCategories.map((category) => {
        const filteredBudget = budget.filter((x) => x.category === category);
        return filteredBudget.length > 0 ? (
          <div key={category} className={styles["distribution__category"]}>
            <p>{category}:</p>
            <p>
              {filteredBudget.reduce((total, acc) => total + acc.percentage, 0)}
              %
            </p>
            {parseFloat(
              (filteredBudget.reduce(
                (total, acc) => total + acc.percentage,
                0,
              ) /
                100) *
                income,
            ).toFixed(2)}{" "}
            €<p></p>
          </div>
        ) : null;
      })}
    </section>
  );
}

BudgetDistribution.propTypes = {
  income: PropTypes.number,
  budget: PropTypes.array,
  handleIncoming: PropTypes.func,
};
