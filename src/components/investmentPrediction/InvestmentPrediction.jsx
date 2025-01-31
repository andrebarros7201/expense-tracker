import { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./investmentPrediction.module.scss";
import "../../styles/main.scss";

import InvestmentPredictionTable from "./components/investmentPredictionTable/InvestmentPredictionTable.jsx";
import InvestmentPredictionForm from "./components/investmentPredictionForm/InvestmentPredictionForm.jsx";
import InvestmentPredictionResults from "./components/investmentPredictionResults/InvestmentPredictionResults.jsx";

export default function InvestmentPrediction() {
  const investment = useSelector((state) => state.investment);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("investment", JSON.stringify(investment));
  }, [investment]);

  return (
    <main className={"container"}>
      <h3 className={`${theme === "dark" ? "dark-text" : ""}`}>
        Investment Prediction
      </h3>
      <section className={styles["prediction__container"]}>
        <InvestmentPredictionForm />
        <InvestmentPredictionResults />
        <InvestmentPredictionTable />
      </section>
    </main>
  );
}
