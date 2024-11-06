import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <h4 className={styles["header__title"]}>Expense Tracker</h4>
      <ul className={styles["header__list"]}>
        <li>
          <Link
            className={styles["header__list-item"]}
            to={"/personal-finances"}
          >
            Personal Finances
          </Link>
        </li>
        <li>
          <Link className={styles["header__list-item"]} to={"/market"}>
            Market
          </Link>
        </li>
      </ul>
    </header>
  );
}
