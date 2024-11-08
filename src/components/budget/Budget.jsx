import "../../styles/container.scss";
import styles from "./budget.module.scss";
import BudgetDistribution from "./components/budgetDistribution/BudgetDistribution.jsx";
import { createContext, useState } from "react";
import BudgetAddItemForm from "./components/budgetAddItem/BudgetAddItemForm.jsx";

export const BudgetContext = createContext(null);

const initialBudget = [
  { id: 1, name: "Rent", category: "Housing", percentage: 40 },
  { id: 2, name: "Groceries", category: "Food", percentage: 25 },
  { id: 3, name: "Utilities", category: "Bills", percentage: 15 },
  { id: 4, name: "Entertainment", category: "Leisure", percentage: 20 },
  { id: 5, name: "Internet", category: "Housing", percentage: 10 },
  { id: 6, name: "Dining Out", category: "Food", percentage: 10 },
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
  const [countID, setCountID] = useState(7);
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
        addBudgetItem,
        updateBudgetItem,
        deleteBudgetItem,
        handleIncomeChange,
      }}
    >
      <main className={"container"}>
        <h2>Monthly Budget</h2>
        <div className={styles["budget__container"]}>
          <BudgetDistribution />
          <BudgetAddItemForm />
        </div>
      </main>
    </BudgetContext.Provider>
  );
}
