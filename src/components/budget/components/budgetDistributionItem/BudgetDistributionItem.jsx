import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BudgetDistributionitem.module.scss";

export default function DistributionItem({
  list,
  category,
  filteredBudget,
  income,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const totalPercentage = filteredBudget.reduce(
    (total, acc) => total + acc.percentage,
    0,
  );
  const totalAmount = parseFloat((totalPercentage / 100) * income).toFixed(2);

  return (
    <div className={styles["distribution__category"]}>
      <p>{category}:</p>
      <p>{totalPercentage} %</p>
      <p>{totalAmount} €</p>
      <button className={styles["distribution__button"]} onClick={handleToggle}>
        {isOpen ? "Close" : "Open"} Details
      </button>
      {isOpen && (
        <div className={styles["distribution__details"]}>
          {list.map((item, index) => (
            <div key={index} className={styles["distribution__details-item"]}>
              <p>{item.name}</p>
              <p>{item.percentage} %</p>
              <p>{((item.percentage / 100) * income).toFixed(2)} €</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

DistributionItem.propTypes = {
  list: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  filteredBudget: PropTypes.array.isRequired,
  income: PropTypes.number.isRequired,
};
