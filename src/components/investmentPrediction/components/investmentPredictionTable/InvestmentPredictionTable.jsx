import { useContext } from "react";
import styles from "./investmentPredictionTable.module.scss";
import "../../../../styles/main.scss";
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
        <h3>Calculate Growth First</h3>
      )}
    </section>
  );
}
