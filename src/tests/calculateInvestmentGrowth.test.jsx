import { describe, it, expect } from "vitest";
import { calculateInvestmentGrowth } from "../utils/calculateInvestmentGrowth.js";

describe("calculateInvestmentGrowth", () => {
  const initialInvestment = 1000;
  const monthlyContribution = 100;
  const yearlyGrowth = 5;
  const years = 2;
  const result = calculateInvestmentGrowth({
    initialInvestment,
    monthlyContribution,
    yearlyGrowth,
    years,
  });

  it("check if array length is equal to years", () => {
    expect(result.length).toBe(years);
  });

  it("check if first month is January", () => {
    expect(result[0].months[0].month).toBe("January");
  });

  it("check if current year is correct", () => {
    expect(result[0].year).toBe(new Date().getFullYear());
  });
});
