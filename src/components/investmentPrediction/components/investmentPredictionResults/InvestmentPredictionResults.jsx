import styles from "./InvestmentPredictionResults.module.scss";
import { useContext } from "react";
import { InvestmentPredictionContext } from "../../InvestmentPrediction.jsx";

export default function InvestmentPredictionResults() {
  const { investment } = useContext(InvestmentPredictionContext);
  return (
    <section className={styles["result"]}>
      <span className={styles["result__field"]}>
        <p>Initial Investment: </p>
        <p>
          {parseFloat(investment.initialInvestment)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>Total Investment: </p>
        <p>
          {parseFloat(investment.totalContribution)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>Growth: </p>
        <p>
          {parseFloat(investment.totalGrowth)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>Final Year: </p>
        <p>
          {parseFloat(investment.finalYear)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>4%: </p>
        <p>
          {parseFloat(investment.fireFourPercent)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>FIRE Income: </p>
        <p>
          {investment.fireMonthlyIncome
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
    </section>
  );
}
