import { useContext, useState } from "react";
import styles from "./BudgetItem.module.scss";
import { BudgetContext } from "../../Budget.jsx";
import { useDispatch } from "react-redux";
import { BudgetActions } from "../../../../store/budgetSlicer.js";

export default function BudgetItem({ item }) {
  const { income, deleteBudgetItem, updateBudgetItem } =
    useContext(BudgetContext);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBudgetItem, setUpdatedBudgetItem] = useState({
    id: item.id,
    name: item.name,
    percentage: item.percentage,
    category: item.category,
  });

  function handleOnChangeUpdateItem(field, value) {
    setUpdatedBudgetItem({ ...updatedBudgetItem, [field]: value });
  }

  function toggleIsEditing(item) {
    setUpdatedBudgetItem(item);
    setIsEditing(!isEditing);
  }

  function handleSaveUpdatedItem() {
    dispatch(BudgetActions.updateBudgetItem({ item: updatedBudgetItem }));
    setIsEditing(false);
  }

  return (
    <div className={styles["budget__item"]}>
      {!isEditing ? (
        <>
          <p>{item.name}</p>
          <p>{item.percentage} %</p>
          <p>{((item.percentage / 100) * income).toFixed(2)} €</p>
        </>
      ) : (
        <>
          <input
            className={styles["budget__input"]}
            type="text"
            value={updatedBudgetItem.name}
            onChange={(e) => handleOnChangeUpdateItem("name", e.target.value)}
          />
          <input
            className={styles["budget__input"]}
            type="number"
            value={updatedBudgetItem.percentage}
            onChange={(e) =>
              handleOnChangeUpdateItem("percentage", Number(e.target.value))
            }
          />
          <p>{((item.percentage / 100) * income).toFixed(2)} €</p>
        </>
      )}

      <div className={styles["budget__item-buttons"]}>
        {!isEditing ? (
          <button
            className={`${styles["budget__button"]} ${styles["budget__button--update"]}`}
            onClick={() => toggleIsEditing(item)}
          >
            Update
          </button>
        ) : (
          <button
            className={`${styles["budget__button"]} ${styles["budget__button--save"]}`}
            onClick={handleSaveUpdatedItem}
          >
            Save
          </button>
        )}

        <button
          className={`${styles["budget__button"]} ${styles["budget__button--delete"]}`}
          onClick={() => deleteBudgetItem(item)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
