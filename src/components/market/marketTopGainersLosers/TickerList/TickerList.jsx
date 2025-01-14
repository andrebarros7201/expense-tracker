import styles from "./TickerList.module.scss";
import TickerListItem from "./TickerListItem/TickerListItem.jsx";
import PropTypes from "prop-types";

export default function TickerList({ loading, list = [], children }) {
  return loading ? (
    <div className={styles["list--loading"]}>
      <h2>Loading...</h2>
    </div>
  ) : (
    <div className={styles["list"]}>
      <h3 className={styles.title}>{children}</h3>
      <div className={styles["list__header"]}>
        <p>Ticker</p>
        <p>Price</p>
        <p>Change $</p>
        <p>Change %</p>
        <p>Volume</p>
      </div>
      {list.length > 0 ? (
        list.map((item) => <TickerListItem key={item.ticker} item={item} />)
      ) : (
        <div className={styles["list--empty"]}>
          <h2>No data available</h2>
        </div>
      )}
    </div>
  );
}

TickerList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array,
  children: PropTypes.string.isRequired,
};
