import styles from "./InvestmentPredictionResults.module.scss";
import { useContext } from "react";
import { InvestmentContext } from "../../../../pages/Investments.jsx";

export default function InvestmentPredictionResults() {
  const { investment } = useContext(InvestmentContext);
  return (
    <section className={styles["result"]}>
      <p className={styles["result__text"]}>
        Initial Investment:{" "}
        {parseFloat(investment.initialInvestment)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
        €
      </p>
      <p className={styles["result__text"]}>
        Total Investment:{" "}
        {parseFloat(investment.totalContribution)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
        €
      </p>
      <p className={styles["result__text"]}>
        Growth:{" "}
        {parseFloat(investment.totalGrowth)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
        €
      </p>
      <p className={styles["result__text"]}>
        Final Year:{" "}
        {parseFloat(investment.finalYear)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
        €
      </p>
      <p className={styles["result__text"]}>
        4%:{" "}
        {parseFloat(investment.fireFourPercent)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
        €
      </p>
      <p className={styles["result__text"]}>
        FIRE Income:{" "}
        {investment.fireMonthlyIncome
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
        €
      </p>
    </section>
  );
}
