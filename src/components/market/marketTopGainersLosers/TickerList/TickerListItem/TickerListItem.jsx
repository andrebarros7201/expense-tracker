import styles from "./TickerListItem.module.scss";
import "../../../../../styles/main.scss";
import PropTypes from "prop-types";

export default function TickerList({ item }) {
  return (
    <div className={styles["item"]}>
      <p className={styles["item__name"]}>{item.ticker}</p>
      <p>{Number(item.price).toFixed(3)} $</p>
      <p>{Number(item.change_amount).toFixed(2)} $</p>
      <p>{parseFloat(item.change_percentage).toFixed(2)} %</p>
      <p>{item.volume}</p>
    </div>
  );
}

TickerList.propTypes = {
  item: PropTypes.object.isRequired,
};
