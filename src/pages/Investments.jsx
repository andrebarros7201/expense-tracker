import "../styles/_pages.scss";
import InvestmentPrediction from "../components/investmentPrediction/InvestmentPrediction.jsx";
import { createContext, useCallback, useState } from "react";
import { calculateInvestmentGrowth } from "../utils/calculateInvestmentGrowth.js";

export const InvestmentContext = createContext(null);

export default function Investments() {
  const [investment, setInvestment] = useState({
    years: 0,
    initialInvestment: 0,
    monthlyContribution: 0,
    yearlyGrowth: 0,
    growth: [],
    finalYear: 0,
    totalGrowth: 0,
    totalContribution: 0,
    fireFourPercent: 0,
    fireMonthlyIncome: 0,
  });

  const handleCalculateGrowth = useCallback((values, e) => {
    e.preventDefault();

    // Calculate growth and contributions
    const growth = calculateInvestmentGrowth(values);

    // Set the new investment state
    setInvestment((prevState) => {
      const newTotalContribution =
        values.monthlyContribution * 12 * values.years +
        values.initialInvestment;
      const newTotalGrowth =
        growth[growth.length - 1].value - newTotalContribution;

      // Final value for the investment after growth
      const finalYearValue = growth[growth.length - 1].value;
      const newFireFourPercent = finalYearValue * 0.04;
      const newFireMonthlyIncome = newFireFourPercent / 12;

      return {
        ...prevState,
        years: values.years,
        initialInvestment: values.initialInvestment,
        monthlyContribution: values.monthlyContribution,
        yearlyGrowth: values.yearlyGrowth,
        growth: growth,
        finalYear: finalYearValue,
        totalGrowth: newTotalGrowth,
        totalContribution: newTotalContribution,
        fireFourPercent: newFireFourPercent,
        fireMonthlyIncome: newFireMonthlyIncome,
      };
    });
  }, []);
  return (
    <InvestmentContext.Provider
      value={{ investment, setInvestment, handleCalculateGrowth }}
    >
      <main className={"page"}>
        <InvestmentPrediction />
      </main>
    </InvestmentContext.Provider>
  );
}
