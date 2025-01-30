import styles from "./BudgetDistribution.module.scss";
import PropTypes from "prop-types";
import DistributionItem from "../budgetDistributionItem/BudgetDistributionItem.jsx";
import { useSelector } from "react-redux";

export default function BudgetDistribution() {
  const { budget, income, categories } = useSelector((state) => state.budget);

  return (
    <section className={styles["distribution"]}>
      {categories.map((category) => {
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
