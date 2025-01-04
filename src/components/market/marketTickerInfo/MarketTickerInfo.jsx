import styles from "./MarketTickerInfo.module.scss";
import "../../../styles/main.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MarketTickerInfo() {
  const { ticker } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [tickerInfo, setTickerInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${import.meta.env.VITE_API_KEY}`,
        );
        const data = await response.json();
        setTickerInfo(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });

  return (
    <section className={styles["container"]}>
      <h2>{ticker}</h2>
    </section>
  );
}
