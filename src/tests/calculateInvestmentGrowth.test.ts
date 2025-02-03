import { describe, expect, it } from "vitest";
import calculateInvestmentGrowth from "../utils/calculateInvestmentGrowth";

describe("calculateInvestmentGrowth", () => {
  const initialInvestment: number = 1000;
  const monthlyContribution: number = 100;
  const yearlyGrowth: number = 5;
  const years: number = 2;

  const result = calculateInvestmentGrowth(
    years,
    initialInvestment,
    monthlyContribution,
    yearlyGrowth,
  );

  it("array length is equal to years", () => {
    expect(result.length).toBe(years);
  });

  it("first month is January", () => {
    expect(result[0].months[0].month).toBe("January");
  });

  it("current year is correct", () => {
    expect(result[0].year).toBe(new Date().getFullYear());
  });
});
