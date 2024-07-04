import styles from '../../styles/detailsNav.module.css'
import { Link } from "react-router-dom";

export default function DetailsNav() {
  return (
    <nav className={styles["details-nav"]}>
      <Link to="/">Table</Link>
      <Link to="/chart">Chart</Link>
    </nav>
  );
}
