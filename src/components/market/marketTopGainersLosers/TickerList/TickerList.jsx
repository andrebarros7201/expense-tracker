import styles from "./TickerList.module.scss";
import TickerListItem from "./TickerListItem/TickerListItem.jsx";

export default function TickerList({ list, children }) {
  return (
    <div className={styles["list"]}>
      <h3>{children}</h3>
      <div className={styles["list__header"]}>
        <p>Ticker</p>
        <p>Price</p>
        <p>Change $</p>
        <p>Change %</p>
        <p>Volume</p>
      </div>
      {list.map((item) => (
        <TickerListItem key={item.ticker} item={item} />
      ))}
    </div>
  );
}
