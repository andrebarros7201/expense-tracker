import "./App.css";
import { createContext, useCallback, useEffect, useState } from "react";
import { calculateInvestmentGrowth } from "./utils/calculateInvestmentGrowth.js";
import styles from "./styles/components/navbar.module.css";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

export const AppContext = createContext(null);

function App() {
  const initialBudget = [
    { name: "Expenses", proportion: 50, detail: [] },
    { name: "Investments", proportion: 20, detail: [] },
    { name: "Other", proportion: 30, detail: [] },
  ];

  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(initialBudget);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1300);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1300);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 1300);

    if (window.innerWidth > 1300) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [investment, setInvestment] = useState({
    years: 0,
    initialInvestment: 0,
    monthlyContribution: 0,
    yearlyGrowth: 0,
    growth: [],
    finalYear: 0,
    totalGrowth: 0,
    totalContribution: 0,
    fireFourPercent: 0,
    fireMonthlyIncome: 0,
  });

  const addBudgetItem = (newItem) => {
    setBudget([...budget, newItem]);
  };

  const updateBudgetItem = (oldItem, updatedItem) => {
    const oldItemIndex = budget.indexOf(oldItem);
    const newBudget = [...budget];
    newBudget[oldItemIndex] = updatedItem;
    setBudget(newBudget);
  };

  const deleteBudgetItem = (item) => {
    const newBudget = budget.filter((x) => x.name !== item.name);
    setBudget(newBudget);
  };

  const handleCalculateGrowth = useCallback((values, e) => {
    e.preventDefault();

    // Calculate growth and contributions
    const growth = calculateInvestmentGrowth(values);

    // Set the new investment state
    setInvestment((prevState) => {
      const newTotalContribution =
        values.monthlyContribution * 12 * values.years +
        values.initialInvestment;
      const newTotalGrowth =
        growth[growth.length - 1].value - newTotalContribution;

      // Final value for the investment after growth
      const finalYearValue = growth[growth.length - 1].value;
      const newFireFourPercent = finalYearValue * 0.04;
      const newFireMonthlyIncome = newFireFourPercent / 12;

      return {
        ...prevState,
        years: values.years,
        initialInvestment: values.initialInvestment,
        monthlyContribution: values.monthlyContribution,
        yearlyGrowth: values.yearlyGrowth,
        growth: growth,
        finalYear: finalYearValue,
        totalGrowth: newTotalGrowth,
        totalContribution: newTotalContribution,
        fireFourPercent: newFireFourPercent,
        fireMonthlyIncome: newFireMonthlyIncome,
      };
    });
  }, []);

  const handleIncomeChange = (value) => {
    setIncome(value);
  };

  return (
    <div className={"app"}>
      <AppContext.Provider
        value={{
          income,
          budget,
          handleIncomeChange,
          investment,
          handleCalculateGrowth,
          updateBudgetItem,
          deleteBudgetItem,
          addBudgetItem,
        }}
      >
        <Navbar
          isMobileView={isMobileView}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {isMobileView && (
          <button
            className={styles["toggle-sidebar-button"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            Toggle Sidebar
          </button>
        )}
        <Outlet />
      </AppContext.Provider>
    </div>
  );
}

export default App;
