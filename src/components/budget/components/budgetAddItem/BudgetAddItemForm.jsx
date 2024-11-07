import { useContext, useState } from "react";
import styles from "./BudgetAddItemForm.module.scss";
import { BudgetContext } from "../../Budget.jsx";

export default function BudgetAddItemForm() {
  const { addBudgetItem, expenseCategories } = useContext(BudgetContext);

  const initialValues = {
    name: "",
    category: expenseCategories[0],
    percentage: 0,
  };

  const [newItem, setNewItem] = useState(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    addBudgetItem(newItem);
  }

  function handleChange(field, value) {
    setNewItem({ ...newItem, [field]: value });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles["form"]}>
      <span className={styles["form__field"]}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => handleChange("name", e.target.value)}
          value={newItem.name}
          type="text"
          id={"name"}
        />
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="name">Name</label>
        <select
          onChange={(e) => handleChange("category", e.target.value)}
          value={newItem.category}
        >
          {expenseCategories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="percentage">Percentage</label>
        <input
          onChange={(e) => handleChange("percentage", e.target.value)}
          value={newItem.percentage}
          type="number"
          id={"percentage"}
          min={0}
          max={100}
        />
      </span>
      <button type={"submit"} className={styles["form__button"]}>
        Add Item
      </button>
    </form>
  );
}
