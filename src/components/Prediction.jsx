import styles from "../styles/prediction.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Prediction({ investment, handleCalculateGrowth }) {
  const [values, setValues] = useState({
    years: 0,
    initialInvestment: 0,
    monthlyContribution: 0,
    yearlyGrowth: 0,
  });

  const handlePredictionFormChange = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  const handleSubmitForm = (values, e) => {
    handleCalculateGrowth(values, e);
  };

  //TODO crate a function in here to store the form values and then send the values to the App.jsx
  return (
    <section className={styles["prediction"]}>
      <h2>Investment Prediction</h2>
      <div>
        <div className={styles["left"]}>
          <form
            className={styles["form-prediction"]}
            onSubmit={(e) => handleSubmitForm(values, e)}
          >
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
            <button type={"submit"}>Calculate</button>
          </form>
        </div>

        <div className={styles["right"]}>
          <h3>Investment Growth</h3>

          {investment.growth && (
            <div>
              <p>
                Initial Investment:{" "}
                {parseFloat(investment.initialInvestment)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                €
              </p>
              <p>
                Total Investment:{" "}
                {parseFloat(investment.totalContribution)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                €
              </p>
              <p>
                Growth:{" "}
                {parseFloat(investment.totalGrowth)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                €
              </p>
              <p>
                Final Year:{" "}
                {parseFloat(investment.finalYear)
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
  handleCalculateGrowth: PropTypes.func,
  investment: PropTypes.object,
};
