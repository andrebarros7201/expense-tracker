import styles from "../styles/details.module.css";
import { Outlet } from "react-router-dom";
import DetailsNav from "./details/DetailsNav.jsx";

export default function Details() {
  return (
    <main className={styles["main"]}>
      <DetailsNav />
      <Outlet />
    </main>
  );
}
