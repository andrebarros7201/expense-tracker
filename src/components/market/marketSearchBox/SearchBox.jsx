import styles from "./SearchBox.module.scss";
import "../../../styles/main.scss";
import { useContext } from "react";
import { MarketContext } from "../Market.jsx";

export default function SearchBox() {
  const { setTicker, ticker, setTickerData } = useContext(MarketContext);

  function handleChange(event) {
    setTicker(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${import.meta.env.VITE_API_KEY}`,
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setTickerData(data);
    } catch (error) {
      console.error("Failed to fetch ticker data:", error);
    }
  }
  return (
    <section className={styles["search"]}>
      <input
        className={"form__input"}
        type="text"
        placeholder="Ticker: IBM, AAPL..."
        required
        min={1}
        max={4}
        value={ticker}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={(e) => handleSubmit(e)} className={"button"}>
        Search
      </button>
    </section>
  );
}
