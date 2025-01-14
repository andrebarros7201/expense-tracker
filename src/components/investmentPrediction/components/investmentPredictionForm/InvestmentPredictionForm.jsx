import styles from "./investmentPredictionForm.module.scss";
import "../../../../styles/main.scss";
import { useContext, useState } from "react";
import { InvestmentPredictionContext } from "../../InvestmentPrediction.jsx";

export default function InvestmentPredictionForm() {
  const { handleCalculateGrowth } = useContext(InvestmentPredictionContext);

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
    <form
      className={styles["form"]}
      onSubmit={(e) => handleSubmitForm(values, e)}
    >
      <span className={styles["form__field"]}>
        <label htmlFor="years" className={styles["form__label"]}>
          Years of Investment
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          max={100}
          onChange={(e) =>
            handlePredictionFormChange("years", parseInt(e.target.value))
          }
        />
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="initial-investment" className={styles["form__label"]}>
          Initial Investment
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          onChange={(e) =>
            handlePredictionFormChange(
              "initialInvestment",
              Number(e.target.value),
            )
          }
        />
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="monthly-contribution" className={styles["form__label"]}>
          Monthly Contribution
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          onChange={(e) =>
            handlePredictionFormChange(
              "monthlyContribution",
              Number(e.target.value),
            )
          }
        />
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="investment-growth" className={styles["form__label"]}>
          Yearly Investment Growth
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          onChange={(e) =>
            handlePredictionFormChange("yearlyGrowth", Number(e.target.value))
          }
        />
      </span>
      <button className={"button"} type={"submit"}>
        Calculate
      </button>
    </form>
  );
}
