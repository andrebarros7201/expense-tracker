import { useContext, useState } from "react";
import styles from "../../styles/components/budget.module.css";
import containerComponent from "../../styles/container/containerComponent.module.css";
import { AppContext } from "../../App.jsx";

export default function BudgetAddItem() {
  const { addBudgetItem } = useContext(AppContext);
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState({});

  function handleAddBudgetItem(e) {
    e.preventDefault();
    addBudgetItem(newItem);
    setIsAdding(false);
  }

  function handleChange(field, value) {
    setNewItem({ ...newItem, [field]: value });
  }

  return (
    <div
      className={`${containerComponent["container-table-item-top"]} ${styles["add-item"]}`}
    >
      {!isAdding ? (
        <button
          className={styles["add-button"]}
          onClick={() => {
            setIsAdding(true);
          }}
        >
          Add New Item
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder={"Name"}
            minLength={3}
            maxLength={30}
            required={true}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            type="number"
            placeholder={"Proportion"}
            min={1}
            max={100}
            required={true}
            onChange={(e) => handleChange("proportion", e.target.value)}
          />
          <button
            className={styles["save-button"]}
            onClick={(e) => handleAddBudgetItem(e)}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}
