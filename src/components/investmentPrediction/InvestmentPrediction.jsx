import styles from "./investmentPrediction.module.scss";
import InvestmentPredictionTable from "./components/investmentPredictionTable/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./components/investmentPredictionForm/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./components/investmentPredictionResults/InvestmentPredictionResults.jsx";

export default function InvestmentPrediction() {
  return (
    <main className={styles["prediction"]}>
      <h2>Investment Prediction</h2>
      <section className={styles["prediction__container"]}>
        <InvestmentPredictionForm />
        <InvestmentPredictionResults />
        <InvestmentPredictionTable />
      </section>
    </main>
  );
}