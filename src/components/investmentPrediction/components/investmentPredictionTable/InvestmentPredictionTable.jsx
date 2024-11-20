import { useContext } from "react";
import styles from "./investmentPredictionTable.module.scss";
import TableItem from "../investmentPredictionTableItem/InvestmentPredictionTableItem.jsx";
import { InvestmentPredictionContext } from "../../InvestmentPrediction.jsx";

export default function InvestmentPredictionTable() {
  const {
    investment: { growth },
  } = useContext(InvestmentPredictionContext);

  let previousItem = null; // Initialize previous item as null

  return (
    <section className={styles["table"]}>
      {growth.length > 0 ? (
        growth.map((item) => {
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
        <h2 className={styles["table__text"]}>Calculate Growth First</h2>
      )}
    </section>
  );
}
