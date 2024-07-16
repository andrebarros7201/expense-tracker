import { AppContext } from "../../App.jsx";
import { useContext, useState } from "react";
import styles from "../../styles/components/investmentPrediction/investmentPredictionTable.module.css";
import containerComponent from "../../styles/container/containerComponent.module.css";
import PropTypes from "prop-types";

function TableItem({ item, previousItem }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };
  return (
    <div
      className={containerComponent["container-table-item"]}
      data-testid="table-item"
    >
      <div className={styles["table-item-head"]}>
        <p>Year: {item.year}</p>
        <p>
          Final Value:{" "}
          {String(item.value).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} € <br />
          <b>
            {previousItem
              ? "(+" +
                parseFloat(item.value - previousItem.value)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
                "€)"
              : "(0€)"}
          </b>
        </p>
        <div>
          <button onClick={toggleDetails}>
            {detailsOpen ? "Close" : "Open"} Details
          </button>
        </div>
      </div>
      {detailsOpen && (
        <div className={styles["table-item-details"]}>
          {item.months.map((item) => (
            <div key={item.month}>
              <p>{item.month}:</p>{" "}
              <p>{item.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</p>
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

export default function InvestmentPredictionTable() {
  const {
    investment: { growth },
  } = useContext(AppContext);

  let previousItem = null; // Initialize previous item as null

  return (
    <div className={containerComponent["container-table"]}>
      {growth.length > 0 ? (
        growth.map((item) => {
          const element = (
            <TableItem
              item={item}
              previousItem={previousItem}
              key={item.year}
            />
          );
          previousItem = item; // Update previous item for the next iteration
          return element;
        })
      ) : (
        <h2>Calculate Growth First</h2>
      )}
    </div>
  );
}
