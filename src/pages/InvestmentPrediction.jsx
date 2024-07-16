import styles from "../styles/pages/investmentPrediction.module.css";
import containerPage from "../styles/pages/containerPage.module.css";
import InvestmentPredictionTable from "../components/investmentPrediction/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "../components/investmentPrediction/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "../components/investmentPrediction/InvestmentPredictionResults.jsx";

export default function InvestmentPrediction() {
  return (
    <main className={`${containerPage["container-main"]}`}>
      <h2>Investment Prediction</h2>
      <section
        className={`${containerPage["container-components"]} ${styles["prediction-components"]}`}
      >
        <InvestmentPredictionForm />
        <InvestmentPredictionResults />
        <InvestmentPredictionTable />
      </section>
    </main>
  );
}
