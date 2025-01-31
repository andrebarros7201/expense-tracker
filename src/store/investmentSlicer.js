import { createSlice } from "@reduxjs/toolkit";
import calculateInvestmentGrowth from "../utils/calculateInvestmentGrowth.js";

const localState = JSON.parse(localStorage.getItem("investment")) || {};

const initialState = {
  years: localState?.years || 0,
  initialInvestment: localState?.initialInvestment || 0,
  monthlyContribution: localState?.monthlyContribution || 0,
  yearlyGrowth: localState?.yearlyGrowth || 0,
  prediction: localState?.prediction || [],
  finalYear: localState?.finalYear || 0,
  totalGrowth: localState?.totalGrowth || 0,
  totalContribution: localState?.totalContribution || 0,
};

const investmentSlice = createSlice({
  name: "InvestmentSlice",
  initialState,
  reducers: {
    calculateInvestment: (state, action) => {
      const { years, initialInvestment, monthlyContribution, yearlyGrowth } =
        action.payload;
      state.years = years;
      state.initialInvestment = initialInvestment;
      state.monthlyContribution = monthlyContribution;
      state.yearlyGrowth = yearlyGrowth;

      state.prediction = calculateInvestmentGrowth(
        state.years,
        state.initialInvestment,
        state.monthlyContribution,
        state.yearlyGrowth,
      );

      state.totalContribution =
        state.initialInvestment + state.monthlyContribution * 12 * state.years;

      state.finalYear = state.prediction[state.prediction.length - 1].value;
      state.totalGrowth = state.finalYear - state.totalContribution;
    },
  },
});

export const InvestmentActions = investmentSlice.actions;

export default investmentSlice.reducer;
