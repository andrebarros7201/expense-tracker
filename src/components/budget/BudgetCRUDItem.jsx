import styles from "../../styles/components/budget/budgetCrud.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function BudgetCRUDItem({ item }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  return (
    <div className={styles["budgetCRUDITem"]} data-testid="budgetCRUDITem">
      <div className={styles["budgetCRUDITem-top"]}>
        <p>{item.name}</p>
        <p>{item.proportion}</p>
        <button>{detailsOpen ? "Close" : "Open"} Details</button>
      </div>
      {detailsOpen && (
        <div className={styles["budgetCRUDItem-bottom"]}>
          {item.detail.map((itemDetail) => (
            <div key={itemDetail.name}>
              <p>{itemDetail.name}</p>
              <p>{itemDetail.proportion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

BudgetCRUDItem.propTypes = {
  item: PropTypes.object,
};
