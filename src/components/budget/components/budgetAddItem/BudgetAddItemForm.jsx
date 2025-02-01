import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BudgetActions } from "../../../../store/budgetSlicer.js";

import styles from "./BudgetAddItemForm.module.scss";
import "../../../../styles/main.scss";

export default function BudgetAddItemForm() {
  const dispatch = useDispatch();
  const { countID, categories, budget } = useSelector((state) => state.budget);
  const { theme } = useSelector((state) => state.theme);
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
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`wrapper form ${theme === "dark" ? "dark-theme" : ""}`}
    >
      <span className={"form__field"}>
        <label htmlFor="name" className={"form__label"}>
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
      <span className={"form__field"}>
        <label htmlFor="name" className={"form__label"}>
          Category
        </label>
        <select
          className={"form__select"}
          onChange={(e) => handleChange("category", e.target.value)}
          value={newItem.category}
        >
          {categories.map((item, index) => (
            <option className={"form__option"} key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </span>
      <span className={"form__field"}>
        <label htmlFor="percentage" className={"form__label"}>
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
