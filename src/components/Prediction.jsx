import styles from "../styles/prediction.module.css";
import PropTypes from "prop-types";
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

Prediction.propTypes = {
  handleCalculateGrowth: PropTypes.func,
  investment: PropTypes.object,
};
