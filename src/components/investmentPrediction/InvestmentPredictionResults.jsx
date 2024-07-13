import styles from "../../styles/prediction.module.css";
import { useContext } from "react";
import { AppContext } from "../../App.jsx";

export default function InvestmentPredictionResults() {
  const { investment } = useContext(AppContext);
  return (
    <div className={styles["right"]}>
      {investment.growth && (
        <div>
          <p>
            Initial Investment:{" "}
            {parseFloat(investment.initialInvestment)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            €
          </p>
          <p>
            Total Investment:{" "}
            {parseFloat(investment.totalContribution)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            €
          </p>
          <p>
            Growth:{" "}
            {parseFloat(investment.totalGrowth)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            €
          </p>
          <p>
            Final Year:{" "}
            {parseFloat(investment.finalYear)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            €
          </p>
          <p>
            4%:{" "}
            {parseFloat(investment.fireFourPercent)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            €
          </p>
          <p>
            FIRE Income:{" "}
            {investment.fireMonthlyIncome
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            €
          </p>
        </div>
      )}
    </div>
  );
}
