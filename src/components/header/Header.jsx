import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import light_theme from "../../assets/light_theme.svg";
import dark_theme from "../../assets/dark_theme.svg";
import { useContext } from "react";
import { AppContext } from "../../App.jsx";

export default function Header() {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <header className={styles["header"]}>
      <h4 className={styles["header__title"]}>Expense Tracker</h4>
      <button
        className={styles["header__button"]}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <img
          src={theme === "light" ? dark_theme : light_theme}
          alt={`${theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}`}
          className={styles["header__icon"]}
        />
      </button>

      <ul className={styles["header__list"]}>
        <li className={styles["header__list-item"]}>
          <Link to={"/personal-finances"}>Personal Finances</Link>
        </li>
        <li className={styles["header__list-item"]}>
          <Link to={"/market"}>Market</Link>
        </li>
      </ul>
    </header>
  );
}
