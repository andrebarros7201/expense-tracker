import styles from "./Market.module.scss";
import "../../styles/main.scss";
import { createContext, useState } from "react";
import SearchBox from "./marketSearchBox/SearchBox.jsx";
import MarketTickerInfo from "./marketTickerInfo/MarketTickerInfo.jsx";

export const MarketContext = createContext(null);

export default function Market() {
  const [ticker, setTicker] = useState("");
  const [tickerData, setTickerData] = useState(null);

  return (
    <MarketContext.Provider
      value={{ ticker, setTicker, tickerData, setTickerData }}
    >
      <main className={"container"}>
        <div className={styles["market"]}>
          <h2>Market</h2>
          <SearchBox />
        </div>
        <MarketTickerInfo />
      </main>
    </MarketContext.Provider>
  );
}
