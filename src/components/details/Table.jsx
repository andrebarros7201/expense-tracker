import { AppContext } from "../../App.jsx";
import { useContext } from "react";
import styles from "../../styles/table.module.css";

function TableItem({ item }) {
  return (
    <div className={styles["table-item"]}>
      <p>Year: {item.year}</p>
      <p>Final Value: {item.value}€</p>
    </div>
  );
}

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
