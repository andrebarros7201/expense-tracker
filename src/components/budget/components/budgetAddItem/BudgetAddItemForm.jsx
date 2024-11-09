import { useContext, useState } from "react";
import styles from "./BudgetAddItemForm.module.scss";
import { BudgetContext } from "../../Budget.jsx";
import "../../../../styles/main.scss";

export default function BudgetAddItemForm() {
  const { countID, addBudgetItem, expenseCategories } =
    useContext(BudgetContext);

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
        <label htmlFor="name" className={styles["form__label"]}>
          Name
        </label>
        <input
          className={"form__input"}
          onChange={(e) => handleChange("name", e.target.value)}
          value={newItem.name}
          type="text"
          id={"name"}
        />
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="name" className={styles["form__label"]}>
          Category
        </label>
        <select
          className={styles["form__select"]}
          onChange={(e) => handleChange("category", e.target.value)}
          value={newItem.category}
        >
          {expenseCategories.map((item, index) => (
            <option className={styles["form__option"]} key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="percentage" className={styles["form__label"]}>
          Percentage
        </label>
        <input
          className={"form__input"}
          onChange={(e) => handleChange("percentage", Number(e.target.value))}
          value={newItem.percentage}
          type="number"
          id={"percentage"}
          min={0}
          max={100}
        />
      </span>
      <button type={"submit"} className={"button"}>
        Add Item
      </button>
    </form>
  );
}
