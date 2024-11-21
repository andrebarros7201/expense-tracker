import styles from "./Footer.module.scss";
import linkedinLogo from "../../assets/linkedin.svg";
import gitHubLogo from "../../assets/github.svg";

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <p>Made By André Barros</p>
      <a href="https://github.com/andrebarros7201">
        <img src={gitHubLogo} alt="GitHub Logo" />
      </a>
      <a href="https://www.linkedin.com/in/andr%C3%A9-barros-8698a1185/">
        <img src={linkedinLogo} alt="LinkedIn Logo" />
      </a>
      <p>@{new Date().getFullYear()}</p>
    </div>
  );
}
