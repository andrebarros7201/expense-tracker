import styles from "./investmentPredictionForm.module.scss";
import "../../../../styles/main.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InvestmentActions } from "../../../../store/investmentSlicer.js";

export default function InvestmentPredictionForm() {
  const dispatch = useDispatch();
  const { years, initialInvestment, monthlyContribution, yearlyGrowth } =
    useSelector((state) => state.investment);
  const { theme } = useSelector((state) => state.theme);
  const [values, setValues] = useState({
    years: years || 0,
    initialInvestment: initialInvestment || 0,
    monthlyContribution: monthlyContribution || 0,
    yearlyGrowth: yearlyGrowth || 0,
  });

  const handlePredictionFormChange = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      InvestmentActions.calculateInvestment({
        years: values.years,
        initialInvestment: values.initialInvestment,
        monthlyContribution: values.monthlyContribution,
        yearlyGrowth: values.yearlyGrowth,
      }),
    );
  };

  return (
    <form
      className={`form ${theme === "dark" ? "dark-theme" : ""}`}
      onSubmit={(e) => handleSubmitForm(e)}
    >
      <span className={"form__field"}>
        <label htmlFor="years" className={"form__label"}>
          Years of Investment
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          max={100}
          value={values.years}
          onChange={(e) =>
            handlePredictionFormChange("years", parseInt(e.target.value))
          }
        />
      </span>
      <span className={styles["form__field"]}>
        <label htmlFor="initial-investment" className={"form__label"}>
          Initial Investment
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          value={values.initialInvestment}
          onChange={(e) =>
            handlePredictionFormChange(
              "initialInvestment",
              Number(e.target.value),
            )
          }
        />
      </span>
      <span className={"form__field"}>
        <label htmlFor="monthly-contribution" className={"form__label"}>
          Monthly Contribution
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          value={values.monthlyContribution}
          onChange={(e) =>
            handlePredictionFormChange(
              "monthlyContribution",
              Number(e.target.value),
            )
          }
        />
      </span>
      <span className={"form__field"}>
        <label htmlFor="investment-growth" className={"form__label"}>
          Yearly Investment Growth
        </label>
        <input
          className={"form__input"}
          type="number"
          min={0}
          required={true}
          value={values.yearlyGrowth}
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
