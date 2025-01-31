import { configureStore } from "@reduxjs/toolkit";
import budgetSlicer from "./budgetSlicer.js";
import investmentSlice from "./investmentSlicer.js";
const store = configureStore({
  reducer: { budget: budgetSlicer, investment: investmentSlice },
});

export default store;
