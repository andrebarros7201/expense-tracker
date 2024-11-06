import "./App.scss";
import { createContext, useCallback, useEffect, useState } from "react";
import { calculateInvestmentGrowth } from "./utils/calculateInvestmentGrowth.js";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";

export const AppContext = createContext(null);

function App() {
  const initialBudget = [
    { name: "Expenses", proportion: 50, detail: [] },
    { name: "Investments", proportion: 20, detail: [] },
    { name: "Other", proportion: 30, detail: [] },
  ];

  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(initialBudget);
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
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1300);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1300);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 1300);

    // Automatically closes/opens when width less/greater than 1300px
    if (window.innerWidth >= 1300) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

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
        <Header />
        <Outlet />
      </AppContext.Provider>
    </div>
  );
}

export default App;
