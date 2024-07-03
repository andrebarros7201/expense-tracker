import styles from "../styles/details.module.css";
import { Outlet } from "react-router-dom";

export default function Details() {
  return (
    <main className={styles["main"]}>
      <nav>
        <a>Table</a>
      </nav>
      <Outlet />
    </main>
  );
}
