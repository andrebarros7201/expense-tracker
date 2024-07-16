import containerComponent from "../../styles/container/containerComponent.module.css";
import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import BudgetTableItem from "./BudgetTableItem.jsx";
import BudgetAddItem from "./BudgetAddItem.jsx";

export default function BudgetTable() {
  const { budget } = useContext(AppContext);
  return (
    <section className={containerComponent["container-table"]}>
      {budget.map((item) => (
        <BudgetTableItem item={item} key={item.name} />
      ))}
      <BudgetAddItem />
    </section>
  );
}
