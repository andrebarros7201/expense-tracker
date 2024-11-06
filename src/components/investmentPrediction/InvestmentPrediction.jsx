import styles from "../../styles/pages/investmentPrediction.module.css";
import containerPage from "../../styles/container/containerPage.module.css";
import InvestmentPredictionTable from "./InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./InvestmentPredictionResults.jsx";

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
