import styles from "./SearchBox.module.scss";
import "../../../styles/main.scss";
import { useContext, useEffect, useState } from "react";
import { MarketContext } from "../Market.jsx";
import { Link } from "react-router-dom";

export default function SearchBox() {
  const { setTicker, ticker } = useContext(MarketContext);
  const [searchResults, setSearchResults] = useState(null);

  function handleChange(event) {
    setTicker(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.twelvedata.com/symbol_search?symbol=${ticker}`,
        );
        const json = await response.json();
        setSearchResults(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [ticker]);
  return (
    <div className={styles["search"]}>
      <input
        className={`form__input ${styles["search__input"]}`}
        type="text"
        placeholder="Ticker: IBM, AAPL..."
        min={1}
        max={4}
        value={ticker}
        onChange={(e) => handleChange(e)}
      />
      {searchResults && ticker ? (
        <div className={styles["search__results"]}>
          {searchResults.map((result, index) => (
            <Link
              className={styles["search__result"]}
              key={index}
              to={`/market/${result.instrument_type}/${result.symbol}/${result.country}`}
            >
              <p>{result.symbol}</p>
              <div className={styles["search__result-group"]}>
                <p>{result.instrument_name.slice(0, 20)}...</p>
                <p>{result.currency}</p>
                <p>{result.instrument_type}</p>
                <p>{result.country}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
