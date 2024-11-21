import styles from "./TickerListItem.module.scss";
export default function TickerList({ item }) {
  return (
    <div className={styles["item"]}>
      <p>{item.ticker}</p>
      <p>{item.price}</p>
      <p>{item.change_amount}</p>
      <p>{item.change_percentage}</p>
      <p>{item.volume}</p>
    </div>
  );
}
