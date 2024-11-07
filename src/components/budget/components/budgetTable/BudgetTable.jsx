import { useContext } from "react";
import BudgetTableItem from "../budgetTableItem/BudgetTableItem.jsx";
import { BudgetContext } from "../../Budget.jsx";

export default function BudgetTable() {
  const { budget } = useContext(BudgetContext);
  return (
    <section>
      {budget.map((item) => (
        <BudgetTableItem item={item} key={item.name} />
      ))}
    </section>
  );
}
