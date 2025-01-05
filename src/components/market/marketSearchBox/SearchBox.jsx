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
    <form className={styles["search"]}>
      <div className={styles["search__field"]}>
        <input
          className={"form__input"}
          type="text"
          placeholder="Ticker: IBM, AAPL..."
          min={1}
          max={4}
          value={ticker}
          onChange={(e) => handleChange(e)}
        />
        {searchResults ? (
          <div className={styles["search__results"]}>
            {searchResults.map((result, index) => (
              <Link
                className={styles["search__result"]}
                key={index}
                to={`/market/${result.symbol}`}
              >
                {result.symbol}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </form>
  );
}
