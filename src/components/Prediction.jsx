import styles from "../styles/prediction.module.css";
import PropTypes from "prop-types";

export default function Prediction({
  handlePredictionFormChange,
  investmentGrowth,
  handleInvestmentGrowth,
  investment,
}) {
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
                  handlePredictionFormChange("years", parseInt(e.target.value))
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
                    Number(e.target.value),
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
                    Number(e.target.value),
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
                    Number(e.target.value),
                  )
                }
              />
            </span>
            <button onClick={(e) => handleInvestmentGrowth(e)}>
              Calculate
            </button>
          </form>
        </div>

        <div className={styles["right"]}>
          <h3>Investment Growth</h3>

          {investmentGrowth && (
            <div>
              <p>
                Initial Investment{" "}
                {parseFloat(investment.initialInvestment)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                €
              </p>
              <p>
                Total Investment:{" "}
                {parseFloat(
                  investment.monthlyContribution * 12 * investment.years,
                )
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                €
              </p>
              <p>
                Growth:{" "}
                {parseFloat(
                  investmentGrowth[investmentGrowth.length - 1].value -
                    investment.monthlyContribution * 12 * investment.years,
                )
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                €
              </p>
              <p>
                Final Year{" "}
                {parseFloat(investmentGrowth[investmentGrowth.length - 1].value)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                €
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

Prediction.propTypes = {
  handlePredictionFormChange: PropTypes.func,
  investmentGrowth: PropTypes.array,
  handleInvestmentGrowth: PropTypes.func,
  investment: PropTypes.object,
};
