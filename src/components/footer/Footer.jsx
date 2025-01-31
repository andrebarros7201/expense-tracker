import styles from "./Footer.module.scss";
import "../../styles/main.scss";
import linkedinLogo from "../../assets/linkedin.svg";
import gitHubLogo from "../../assets/github.svg";
import { useSelector } from "react-redux";

export default function Footer() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`${styles["footer"]}`}>
      <p className={`${theme === "dark" ? "dark-text" : ""}`}>
        Made By André Barros
      </p>
      <a href="https://github.com/andrebarros7201">
        <img src={gitHubLogo} alt="GitHub Logo" />
      </a>
      <a href="https://www.linkedin.com/in/andr%C3%A9-barros-8698a1185/">
        <img src={linkedinLogo} alt="LinkedIn Logo" />
      </a>
      <p className={`${theme === "dark" ? "dark-text" : ""}`}>
        © {new Date().getFullYear()}
      </p>
    </div>
  );
}
