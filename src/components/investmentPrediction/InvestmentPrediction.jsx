import styles from "./investmentPrediction.module.css";
import InvestmentPredictionTable from "./components/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./components/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./components/InvestmentPredictionResults.jsx";

export default function InvestmentPrediction() {
  return (
    <main>
      <h2>Investment Prediction</h2>
      <section className={` ${styles["prediction-components"]}`}>
        <InvestmentPredictionForm />
        <InvestmentPredictionResults />
        <InvestmentPredictionTable />
      </section>
    </main>
  );
}
