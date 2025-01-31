import styles from "./InvestmentPredictionResults.module.scss";
import { useSelector } from "react-redux";

export default function InvestmentPredictionResults() {
  const { initialInvestment, totalContribution, totalGrowth, finalYear } =
    useSelector((state) => state.investment);
  return (
    <section className={styles["result"]}>
      <span className={styles["result__field"]}>
        <p>Initial Investment: </p>
        <p>
          {parseFloat(initialInvestment)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>Total Investment: </p>
        <p>
          {parseFloat(totalContribution)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>Growth: </p>
        <p>
          {parseFloat(totalGrowth)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p>Final Year: </p>
        <p>
          {parseFloat(finalYear)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
    </section>
  );
}
