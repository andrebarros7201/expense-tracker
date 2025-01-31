import { configureStore } from "@reduxjs/toolkit";
import budgetSlicer from "./budgetSlicer.js";
import investmentSlice from "./investmentSlicer.js";
import themeSlicer from "./themeSlicer.js";

const store = configureStore({
  reducer: {
    budget: budgetSlicer,
    investment: investmentSlice,
    theme: themeSlicer,
  },
});

export default store;
