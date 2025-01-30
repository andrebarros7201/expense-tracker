import { createSlice } from "@reduxjs/toolkit";

const localState = localStorage.getItem("budget");
const initialState = {
  countID: localState?.countID || 3,
  income: localState?.income || 500,
  categories: [
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
  ],
  budget: localState?.budget || [
    { id: 1, name: "Rent", category: "Housing", percentage: 40 },
    { id: 2, name: "Internet", category: "Housing", percentage: 10 },
  ],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addBudgetItem: (state, action) => {
      const { item } = action.payload;
      state.budget.push(item);
      state.countID++;
    },
    removeBudgetItem: (state, action) => {
      const { item } = action.payload;
      state.budget.splice(state.findIndex(item), 1);
    },
    updateBudgetItem: (state, action) => {
      const { item } = action.payload;
      const oldItemIndex = state.budget.findIndex((x) => x.id === item.id);

      if (oldItemIndex !== -1) {
        state.budget[oldItemIndex] = item;
      }
    },
    setIncome: (state, action) => {
      state.income = action.payload.income;
    },
  },
});

export const BudgetActions = budgetSlice.actions;

export default budgetSlice.reducer;
