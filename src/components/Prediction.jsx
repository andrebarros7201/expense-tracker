import styles from "../styles/investmentPrediction/investmentPrediction.module.css";
import InvestmentPredictionTable from "./investmentPrediction/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./investmentPrediction/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./investmentPrediction/InvestmentPredictionResults.jsx";

export default function Prediction() {
  return (
    <main className={styles["prediction-main"]}>
      <h2>Investment Prediction</h2>
      <div>
        <InvestmentPredictionForm />
        <InvestmentPredictionResults />
        <InvestmentPredictionTable />
      </div>
    </main>
  );
}
