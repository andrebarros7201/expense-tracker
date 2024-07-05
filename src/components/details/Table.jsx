import { AppContext } from "../../App.jsx";
import { useContext, useState } from "react";
import styles from "../../styles/table.module.css";
import PropTypes from "prop-types";

function TableItem({ item }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };
  return (
    <div className={styles["table-item"]}>
      <div>
        <p>Year: {item.year}</p>
        <p>Final Value: {item.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</p>
        <button onClick={toggleDetails}>Show Details</button>
      </div>
      {detailsOpen && (
        <div>
          {item.months.map((month, index) => (
            <div key={index}>
              {index}
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default function Table() {
  const { investment } = useContext(AppContext);

  return (
    <div>
      <div className={styles["table"]}>
        {investment.growth.map((item) => (
          <TableItem item={item} key={item.year} />
        ))}
      </div>
    </div>
  );
}
