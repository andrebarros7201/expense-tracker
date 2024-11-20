import "../styles/_pages.scss";
import Budget from "../components/budget/Budget.jsx";
import InvestmentPrediction from "../components/investmentPrediction/InvestmentPrediction.jsx";

export default function PersonalFinances() {
  return (
    <main className={"page"}>
      <Budget />
      <InvestmentPrediction />
    </main>
  );
}
