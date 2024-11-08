import { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./BudgetDistributionitem.module.scss";
import { BudgetContext } from "../../Budget.jsx";

export default function DistributionItem({
  list,
  category,
  filteredBudget,
  income,
}) {
  const { deleteBudgetItem, updateBudgetItem } = useContext(BudgetContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBudgetItem, setUpdatedBudgetItem] = useState(undefined);

  function handleOnChangeUpdateItem(field, value) {
    setUpdatedBudgetItem({ ...updatedBudgetItem, [field]: value });
  }

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function toggleIsEditing(item) {
    setUpdatedBudgetItem(item);
    setIsEditing(!isEditing);
  }

  function handleSaveUpdatedItem(oldItem) {
    updateBudgetItem(oldItem, updatedBudgetItem);
    setIsEditing(false);
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
              {!isEditing ? (
                <>
                  <p>{item.name}</p>
                  <p>{item.percentage} %</p>
                  <p>{((item.percentage / 100) * income).toFixed(2)} €</p>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleOnChangeUpdateItem("name", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={item.percentage}
                    onChange={(e) =>
                      handleOnChangeUpdateItem("percentage", e.target.value)
                    }
                  />
                </>
              )}

              <div className={styles["distribution__details-item-operations"]}>
                {!isEditing ? (
                  <button onClick={() => toggleIsEditing(item)}>Update</button>
                ) : (
                  <button onClick={() => handleSaveUpdatedItem(item)}>
                    Save
                  </button>
                )}

                <button onClick={() => deleteBudgetItem(item)}>Delete</button>
              </div>
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
