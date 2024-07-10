import { AppContext } from "../../App.jsx";
import { useContext, useState } from "react";
import styles from "../../styles/table.module.css";
import PropTypes from "prop-types";

function TableItem({ item, previousItem }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };
  return (
    <div className={styles["table-item"]}>
      <div className={styles["table-item-head"]}>
        <p>Year: {item.year}</p>
        <p>
          Final Value: {item.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €{" "}
          {previousItem
            ? "( +" +
              parseFloat(item.value - previousItem.value)
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
              " €)"
            : "(0€)"}
        </p>
        <button onClick={toggleDetails}>
          {detailsOpen ? "Close" : "Open"} Details
        </button>
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

export default function Table() {
  const { investment } = useContext(AppContext);

  let previousItem = null; // Initialize previous item as null

  return (
    <div>
      <div className={styles["table"]}>
        {investment.growth.map((item, index) => {
          const element = (
            <TableItem
              item={item}
              previousItem={previousItem}
              key={item.year}
            />
          );
          previousItem = item; // Update previous item for the next iteration
          return element;
        })}
      </div>
    </div>
  );
}
