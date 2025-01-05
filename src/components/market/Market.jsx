import styles from "./Market.module.scss";
import "../../styles/main.scss";
import { createContext, useState } from "react";
import SearchBox from "./marketSearchBox/SearchBox.jsx";
import MarketTopGainersLosers from "./marketTopGainersLosers/MarketTopGainersLosers.jsx";
import { Outlet } from "react-router-dom";

export const MarketContext = createContext(null);

export default function Market() {
  const [ticker, setTicker] = useState("");
  const [tickerData, setTickerData] = useState(null);
  const [tickerName, setTickerName] = useState(null);
  const [mic_code, setMicCode] = useState(null);

  return (
    <MarketContext.Provider
      value={{
        ticker,
        setTicker,
        tickerData,
        setTickerData,
        tickerName,
        setTickerName,
        mic_code,
        setMicCode,
      }}
    >
      <main className={"container"}>
        <div className={styles["market"]}>
          <h2>Market</h2>
          <SearchBox />
        </div>
        <Outlet />
      </main>
    </MarketContext.Provider>
  );
}
