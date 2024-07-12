import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles["details-nav"]}>
      <Link to="/">Budget</Link>
      <Link to="/investment">Investment Growth</Link>

      {/*<Link to="/chart">Chart</Link>
      <Link to="/fire">FIRE</Link>*/}
    </nav>
  );
}
