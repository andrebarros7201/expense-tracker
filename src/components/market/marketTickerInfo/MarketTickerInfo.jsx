import styles from "./MarketTickerInfo.module.scss";
import "../../../styles/main.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MarketTickerInfo() {
  const { symbol, type, country } = useParams(); // Get params from URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [tickerInfo, setTickerInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = undefined;
        if (type === "ETF")
          response = await fetch(
            `https://api.twelvedata.com/etfs?symbol=${symbol}&country=${country}`,
          );
        if (type === "Common Stock")
          response = await fetch(
            `https://api.twelvedata.com/stocks?symbol=${symbol}&country=${country}`,
          );
        if (response) {
          const json = await response.json();
          setTickerInfo(json);
        }
      } catch (e) {
        setError(e.response.data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [symbol, country]);

  return (
    <section className={styles["container"]}>
      <h2>{symbol}</h2>
    </section>
  );
}
