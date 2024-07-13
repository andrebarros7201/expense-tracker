import styles from "../styles/components/investmentPrediction/investmentPrediction.module.css";
import InvestmentPredictionTable from "../components/investmentPrediction/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "../components/investmentPrediction/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "../components/investmentPrediction/InvestmentPredictionResults.jsx";

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
