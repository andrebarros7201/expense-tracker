import styles from "./MarketTopGainersLosers.module.scss";
import { useEffect, useState } from "react";
import TickerList from "./TickerList/TickerList.jsx";

export default function MarketTopGainersLosers() {
  const [topLosers, setTopLosers] = useState(undefined);
  const [topGainers, setTopGainers] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopGainersLosers() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${import.meta.env.VITE_API_KEY}`,
        );
        const data = await response.json();
        setTopGainers(data["top_gainers"]);
        setTopLosers(data["top_losers"]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTopGainersLosers();
  }, []);

  return (
    <section className={styles["top"]}>
      <TickerList loading={loading} list={topGainers}>
        Top Gainers
      </TickerList>
      <TickerList loading={loading} list={topLosers}>
        Top Losers
      </TickerList>
    </section>
  );
}
