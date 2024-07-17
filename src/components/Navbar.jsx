import styles from "../styles/components/navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ isMobileView, isOpen, setIsOpen }) {
  return (
    <nav
      className={`${styles["details-nav"]} ${styles[isMobileView ? "mobile" : ""]} ${styles[isOpen ? "open" : "close"]}`}
    >
      <Link
        to="/"
        onClick={() => {
          isMobileView ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        <svg
          viewBox="0 0 16 16"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 16 16"
        >
          <path
            d="M8 16c4.079 0 7.438-3.055 7.931-7H7.778l-5.027 5.027A7.955 7.955 0 0 0 8 16zM8 0v8h8a8 8 0 0 0-8-8zM0 8a7.96 7.96 0 0 0 2.04 5.324L7 8.364V.069C3.055.562 0 3.921 0 8z"
            fill="#ffffff"
            className="fill-000000"
          ></path>
        </svg>{" "}
        Budget
      </Link>
      <Link
        to="/investment"
        onClick={() => {
          isMobileView ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M90 15.75H66a6 6 0 0 0 0 12h9.516L54 49.266 34.242 29.508a5.998 5.998 0 0 0-8.484 0l-24 24a6 6 0 0 0 8.484 8.484L30 42.234l19.758 19.758a5.998 5.998 0 0 0 8.484 0L84 36.234v9.516a6 6 0 0 0 12 0v-24a5.997 5.997 0 0 0-6-6Z"
            fill="#ffffff"
            className="fill-000000"
          ></path>
        </svg>{" "}
        Investment Growth
      </Link>
    </nav>
  );
}

Navbar.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
