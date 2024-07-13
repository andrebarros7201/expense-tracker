import styles from "../../styles/investmentPrediction/investmentPrediction.module.css";
import InvestmentPredictionTable from "./InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./InvestmentPredictionResults.jsx";

export default function InvestmentPrediction() {
  return (
    <main className={styles["prediction-main"]}>
      <h2>Investment Prediction</h2>
      <section className={styles["prediction-components"]}>
        <InvestmentPredictionForm />
        <InvestmentPredictionResults />
        <InvestmentPredictionTable />
      </section>
    </main>
  );
}
