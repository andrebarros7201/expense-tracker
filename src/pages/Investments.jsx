import "../styles/pages.scss";
import InvestmentPrediction from "./InvestmentPrediction.jsx";

export default function Investments() {
  return (
    <main className={"page"}>
      <h2 className={"page__title"}>Investments</h2>
      <InvestmentPrediction />
    </main>
  );
}
