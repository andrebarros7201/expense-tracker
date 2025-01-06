import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import "../../styles/main.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <h3 className={styles["header__title"]}>Expense Tracker</h3>
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
