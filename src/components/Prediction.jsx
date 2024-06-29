import styles from "../styles/prediction.module.css";
import PropTypes from "prop-types";

export default function Prediction({ investment, handlePredictionFormChange }) {
  return (
    <section className={styles["prediction"]}>
      <h2>Investment Prediction</h2>
      <div>
        <div className={styles["left"]}>
          <form className={styles["form-prediction"]}>
            <span>
              <label htmlFor="years">Years of Investment</label>
              <input
                type="number"
                min={0}
                max={100}
                onChange={(e) =>
                  handlePredictionFormChange("years", Number(e.target.value))
                }
              />
            </span>
            <span>
              <label htmlFor="initial-investment">Initial Investment</label>
              <input
                type="number"
                min={0}
                onChange={(e) =>
                  handlePredictionFormChange(
                    "initialInvestment",
                    parseFloat(e.target.value).toFixed(2)
                  )
                }
              />
            </span>
            <span>
              <label htmlFor="monthly-contribution">Monthly Contribution</label>
              <input
                type="number"
                min={0}
                onChange={(e) =>
                  handlePredictionFormChange(
                    "monthlyContribution",
                    parseFloat(e.target.value).toFixed(2)
                  )
                }
              />
            </span>
            <span>
              <label htmlFor="investment-growth">
                Yearly Investment Growth
              </label>
              <input
                type="number"
                min={0}
                onChange={(e) =>
                  handlePredictionFormChange(
                    "yearlyGrowth",
                    Number(e.target.value)
                  )
                }
              />
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
  handlePredictionFormChange: PropTypes.func,
};
