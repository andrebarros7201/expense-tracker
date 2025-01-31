import styles from "./investmentPrediction.module.scss";
import "../../styles/main.scss";
import InvestmentPredictionTable from "./components/investmentPredictionTable/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./components/investmentPredictionForm/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./components/investmentPredictionResults/InvestmentPredictionResults.jsx";

export default function InvestmentPrediction() {
  return (
    <main className={"container"}>
      <h3>Investment Prediction</h3>
      <section className={styles["prediction__container"]}>
        <InvestmentPredictionForm />
        <InvestmentPredictionResults />
        <InvestmentPredictionTable />
      </section>
    </main>
  );
}
