import { configureStore } from "@reduxjs/toolkit";
import budgetSlicer from "./budgetSlicer.js";

const store = configureStore({ reducer: { budget: budgetSlicer } });

export default store;
