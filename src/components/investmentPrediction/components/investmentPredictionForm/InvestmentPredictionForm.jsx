import styles from "./investmentPredictionForm.module.css";
import { useContext, useState } from "react";
import { AppContext } from "../../../../App.jsx";

export default function InvestmentPredictionForm() {
  const { handleCalculateGrowth } = useContext(AppContext);

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
  return (
    <div>
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
          <label htmlFor="investment-growth">Yearly Investment Growth</label>
          <input
            type="number"
            min={0}
            onChange={(e) =>
              handlePredictionFormChange("yearlyGrowth", Number(e.target.value))
            }
          />
        </span>
        <button type={"submit"}>Calculate</button>
      </form>
    </div>
  );
}
