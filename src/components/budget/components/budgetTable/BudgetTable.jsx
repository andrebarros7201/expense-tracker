import { useContext } from "react";
import { AppContext } from "../../../../App.jsx";
import BudgetTableItem from "../budgetTableItem/BudgetTableItem.jsx";
import BudgetAddItem from "../budgetAddItem/BudgetAddItem.jsx";

export default function BudgetTable() {
  const { budget } = useContext(AppContext);
  return (
    <section>
      {budget.map((item) => (
        <BudgetTableItem item={item} key={item.name} />
      ))}
      <BudgetAddItem />
    </section>
  );
}
