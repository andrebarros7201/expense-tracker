import "../styles/pages.scss";
import Budget from "../components/budget/Budget.jsx";

export default function PersonalFinances() {
  return (
    <main className={"page"}>
      <h2 className={"page__title"}>Personal Finances</h2>
      <Budget />
    </main>
  );
}
