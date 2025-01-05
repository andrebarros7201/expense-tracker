import styles from "./MarketTickerInfo.module.scss";
import "../../../styles/main.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MarketContext } from "../Market.jsx";

export default function MarketTickerInfo() {
  const { symbol, type, country } = useParams();
  const { tickerName, mic_code } = useContext(MarketContext);
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
            `https://api.twelvedata.com/etfs?symbol=${symbol}&country=${country}&mic_code=${mic_code}`,
          );
        if (type === "Common Stock")
          response = await fetch(
            `https://api.twelvedata.com/stocks?symbol=${symbol}&country=${country}&mic_code=${mic_code}`,
          );
        if (response) {
          const json = await response.json();
          setTickerInfo(json.data.filter((x) => x.name === tickerName)[0]);
        }
      } catch (e) {
        setError(e.response.data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [symbol, country, tickerName, type]);

  if (loading) {
    return (
      <section className={styles["container"]}>
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles["container"]}>
        <h2>Error</h2>
        <p>{error}</p>
      </section>
    );
  }

  if (!tickerInfo) {
    return (
      <section className={styles["container"]}>
        <h2>No data available</h2>
      </section>
    );
  }

  return (
    <section className={styles["container"]}>
      <h2>{symbol}</h2>
    </section>
  );
}
