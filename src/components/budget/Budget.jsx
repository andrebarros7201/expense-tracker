import "../../styles/main.scss";
import styles from "./budget.module.scss";
import BudgetDistribution from "./components/budgetDistribution/BudgetDistribution.jsx";
import { createContext, useState } from "react";
import BudgetAddItemForm from "./components/budgetAddItem/BudgetAddItemForm.jsx";
import BudgetIncome from "./components/budgetIncome/BudgetIncome.jsx";

export const BudgetContext = createContext(null);

const initialBudget = [
  { id: 1, name: "Rent", category: "Housing", percentage: 40 },
  { id: 2, name: "Internet", category: "Housing", percentage: 10 },
];

const expenseCategories = [
  "Housing",
  "Utilities",
  "Food",
  "Transportation",
  "Insurance",
  "Healthcare",
  "Debt Payments",
  "Bills",
  "Leisure",
  "Dining Out",
  "Education",
  "Savings & Investments",
  "Clothing",
  "Personal Care",
  "Gifts & Donations",
  "Miscellaneous",
];

export default function Budget() {
  const [countID, setCountID] = useState(3);
  const [income, setIncome] = useState(500);
  const [budget, setBudget] = useState(initialBudget);

  const addBudgetItem = (newItem) => {
    newItem["id"] = countID;
    setBudget([...budget, newItem]);
    setCountID((countID) => countID + 1);
  };

  const updateBudgetItem = (oldItem, updatedItem) => {
    const oldItemIndex = budget.indexOf(oldItem);
    const newBudget = [...budget];
    newBudget[oldItemIndex] = updatedItem;
    setBudget(newBudget);
  };

  const deleteBudgetItem = (item) => {
    const newBudget = budget.filter((x) => x.id !== item.id);
    setBudget(newBudget);
  };

  const handleIncomeChange = (value) => {
    setIncome(value);
  };

  return (
    <BudgetContext.Provider
      value={{
        countID,
        income,
        budget,
        expenseCategories,
        setIncome,
        addBudgetItem,
        updateBudgetItem,
        deleteBudgetItem,
        handleIncomeChange,
      }}
    >
      <main className={"container"}>
        <h3>Monthly Budget</h3>
        <div className={styles["budget__container"]}>
          <BudgetDistribution />
          <BudgetIncome />
          <BudgetAddItemForm />
        </div>
      </main>
    </BudgetContext.Provider>
  );
}
