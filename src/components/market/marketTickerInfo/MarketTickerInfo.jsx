import styles from "./MarketTickerInfo.module.scss";
import "../../../styles/main.scss";
import { useParams } from "react-router-dom";

export default function MarketTickerInfo() {
  const { ticker } = useParams();
  return (
    <section className={styles["container"]}>
      <h2>{ticker}</h2>
    </section>
  );
}
