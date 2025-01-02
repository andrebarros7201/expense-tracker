import styles from "./investmentPrediction.module.scss";
import "../../styles/main.scss";
import InvestmentPredictionTable from "./components/investmentPredictionTable/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./components/investmentPredictionForm/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./components/investmentPredictionResults/InvestmentPredictionResults.jsx";
import { createContext, useCallback, useState } from "react";
import { calculateInvestmentGrowth } from "../../utils/calculateInvestmentGrowth.js";

export const InvestmentPredictionContext = createContext(null);

export default function InvestmentPrediction() {
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
    <InvestmentPredictionContext.Provider
      value={{ investment, setInvestment, handleCalculateGrowth }}
    >
      <main className={"container"}>
        <h2 className={"page__title"}>Investment Prediction</h2>
        <section className={styles["prediction__container"]}>
          <InvestmentPredictionForm />
          <InvestmentPredictionResults />
          <InvestmentPredictionTable />
        </section>
      </main>
    </InvestmentPredictionContext.Provider>
  );
}
