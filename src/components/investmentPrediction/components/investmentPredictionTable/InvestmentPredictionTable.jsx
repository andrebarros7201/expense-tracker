import styles from "./investmentPredictionTable.module.scss";
import "../../../../styles/main.scss";
import TableItem from "../investmentPredictionTableItem/InvestmentPredictionTableItem.jsx";
import { useSelector } from "react-redux";

export default function InvestmentPredictionTable() {
  const { prediction } = useSelector((state) => state.investment);
  const { theme } = useSelector((state) => state.theme);
  let previousItem = null; // Initialize previous item as null

  return (
    <section
      className={`wrapper ${theme === "dark" ? "dark-theme" : ""} ${styles["table"]}`}
    >
      {prediction.length > 0 ? (
        prediction.map((item) => {
          const element = (
            <TableItem
              item={item}
              previousItem={previousItem}
              key={item.year}
            />
          );
          previousItem = item;
          return element;
        })
      ) : (
        <h3>Calculate Growth First</h3>
      )}
    </section>
  );
}
