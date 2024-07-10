import { useContext, useState } from "react";
import { AppContext } from "../../App.jsx";
import styles from "../../styles/fire.module.css";

export default function Fire() {
  const { investment } = useContext(AppContext);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);

  const handleMonthlyExpenses = (value) => {
    setMonthlyExpenses(value);
  };

  const calculateTimeToRetire = () => {};
  return (
    <>
      <h2>Financial Independence, Retire Early</h2>
      <section className={styles["section-fire"]}>
        <div className={styles["left"]}>
          <h3>From Investments</h3>
          <p>
            4% From Investments:{" "}
            {parseFloat(investment.fireFourPercent)
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            €
          </p>
          <p></p>
        </div>
        <div className={styles["right"]}>
          <h3>Monthly Expenses</h3>
          <form className={styles["form-fire"]}>
            <span>
              <label htmlFor="monthlyExpenses">Monthly Expenses</label>
              <input
                type="number"
                min={0}
                id={"monthlyExpenses"}
                onChange={(e) => handleMonthlyExpenses(e.target.value)}
              />
            </span>
            <button type={"submit"}>Calculate</button>
          </form>
        </div>
      </section>
    </>
  );
}
