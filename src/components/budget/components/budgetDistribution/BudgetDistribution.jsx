import { useContext } from "react";
import styles from "./BudgetDistribution.module.scss";
import PropTypes from "prop-types";
import { BudgetContext } from "../../Budget.jsx";
import DistributionItem from "../budgetDistributionItem/BudgetDistributionItem.jsx";

export default function BudgetDistribution() {
  const { budget, income, expenseCategories } = useContext(BudgetContext);

  return (
    <section className={styles["distribution"]}>
      {expenseCategories.map((category) => {
        const filteredBudget = budget.filter((x) => x.category === category);
        return filteredBudget.length > 0 ? (
          <DistributionItem
            list={filteredBudget}
            key={category}
            category={category}
            filteredBudget={filteredBudget}
            income={income}
          />
        ) : null;
      })}
    </section>
  );
}

BudgetDistribution.propTypes = {
  income: PropTypes.number,
  budget: PropTypes.array,
};
