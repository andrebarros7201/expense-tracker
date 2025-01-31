import styles from "./Header.module.scss";
import "../../styles/main.scss";

import darkTheme from "../../assets/moon.svg";
import lightTheme from "../../assets/sun.svg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeActions } from "../../store/themeSlicer.js";

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <header className={styles["header"]}>
      <h3 className={styles["header__title"]}>Expense Tracker</h3>
      <button
        className={styles["header__toggle"]}
        onClick={() => {
          dispatch(ThemeActions.changeTheme());
        }}
      >
        {theme === "light" ? (
          <img src={darkTheme} alt="dark theme" />
        ) : (
          <img src={lightTheme} alt="light theme" />
        )}
      </button>
      <ul className={styles["header__list"]}>
        <li className={styles["header__list-item"]}>
          <Link to={"/personal-finances"}>Personal Finances</Link>
        </li>
        {/*
          <li className={styles["header__list-item"]}>
            <Link to={"/market"}>Market</Link>
          </li>
        */}
      </ul>
    </header>
  );
}
