import styles from "./InvestmentPredictionResults.module.scss";
import "../../../../styles/main.scss";
import { useSelector } from "react-redux";

export default function InvestmentPredictionResults() {
  const { initialInvestment, totalContribution, totalGrowth, finalYear } =
    useSelector((state) => state.investment);
  const { theme } = useSelector((state) => state.theme);

  return (
    <section
      className={`wrapper ${theme === "dark" ? "dark-theme" : ""} ${styles["result"]}`}
    >
      <span className={styles["result__field"]}>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          Initial Investment:{" "}
        </p>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          {parseFloat(initialInvestment)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          Total Investment:{" "}
        </p>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          {parseFloat(totalContribution)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          Growth:{" "}
        </p>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          {parseFloat(totalGrowth)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
      <span className={styles["result__field"]}>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          Final Year:{" "}
        </p>
        <p
          className={`${theme === "dark" ? styles["result__field--dark"] : ""}`}
        >
          {parseFloat(finalYear)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          €
        </p>
      </span>
    </section>
  );
}
