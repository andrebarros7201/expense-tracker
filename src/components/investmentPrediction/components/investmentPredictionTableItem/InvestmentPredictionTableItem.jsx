import styles from "./InvestmentPredictionTableItem.module.scss";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function TableItem({ item, previousItem }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div className={styles["table__item"]} data-testid="table-item">
      <div className={styles["table__item-info"]}>
        <p className={styles["table__item-year"]}>Year: {item.year}</p>
        <p className={styles["table__item-difference"]}>
          Final Value:{" "}
          {String(item.value).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} € <br />
          {previousItem
            ? "(+" +
              parseFloat(item.value - previousItem.value)
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
              "€)"
            : "(0€)"}
        </p>
        <button
          className={styles["table__item-toggle"]}
          onClick={toggleDetails}
        >
          {detailsOpen ? "Close" : "Open"} Details
        </button>
      </div>
      {detailsOpen && (
        <div className={styles["table__item-details"]}>
          {item.months.map((monthItem) => (
            <div key={monthItem.month} className={styles["table__item-month"]}>
              <p className={styles["table__item-month-name"]}>
                {monthItem.month}:
              </p>
              <p className={styles["table__item-month-value"]}>
                {monthItem.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
  previousItem: PropTypes.object,
};
