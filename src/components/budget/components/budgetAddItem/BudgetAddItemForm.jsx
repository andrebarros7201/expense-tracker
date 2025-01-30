import { useEffect, useState } from "react";
import styles from "./BudgetAddItemForm.module.scss";
import "../../../../styles/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { BudgetActions } from "../../../../store/budgetSlicer.js";

export default function BudgetAddItemForm() {
  const dispatch = useDispatch();
  const { countID, categories, budget } = useSelector((state) => state.budget);

  const initialValues = {
    name: "",
    category: categories[0],
    percentage: 1,
    id: countID,
  };

  const [newItem, setNewItem] = useState(initialValues);
  const [maxPercentage, setMaxPercentage] = useState(50);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(BudgetActions.addBudgetItem({ item: newItem }));
  }

  useEffect(() => {
    setMaxPercentage(
      100 - budget.reduce((acc, curr) => acc + curr.percentage, 0),
    );
  }, [budget]);

  function handleChange(field, value) {
    if (field === "percentage") {
      if (value <= maxPercentage) {
        setNewItem({ ...newItem, [field]: value });
      }
      setNewItem({ ...newItem, [field]: maxPercentage });
    }
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
          required={true}
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
          {categories.map((item, index) => (
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
          min={1}
          max={maxPercentage}
        />
      </span>
      <button type={"submit"} className={"button"}>
        Add Item
      </button>
    </form>
  );
}
