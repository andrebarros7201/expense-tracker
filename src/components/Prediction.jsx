import styles from "../styles/prediction.module.css";
import PropTypes from "prop-types";

export default function Prediction({ investment }) {
  return (
    <section className={styles["prediction"]}>
      <h2>Investment Prediction</h2>
      <div>
        <div className={styles["left"]}>
          <form className={styles["form-prediction"]}>
            <span>
              <label htmlFor="years">Years of Investment</label>
              <input type="number" min={0} max={100} />
            </span>
            <span>
              <label htmlFor="initial-investment">Initial Investment</label>
              <input type="number" min={0} />
            </span>
            <span>
              <label htmlFor="monthly-contribution">Monthly Contribution</label>
              <input type="number" min={0} />
            </span>
            <span>
              <label htmlFor="invenstment-growth">Investment Growth</label>
              <input type="number" min={0} />
            </span>
            <button>Calculate</button>
          </form>
        </div>

        <div className={styles["right"]}>
          <h3>Value For Investments: {investment} €</h3>
        </div>
      </div>
    </section>
  );
}

Prediction.propTypes = {
  investment: PropTypes.number,
};
