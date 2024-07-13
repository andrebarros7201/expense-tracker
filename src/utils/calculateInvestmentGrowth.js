export function calculateInvestmentGrowth({
  initialInvestment,
  monthlyContribution,
  yearlyGrowth,
  years,
}) {
  let investmentGrowth = [];

  for (let i = 0; i < years; i++) {
    // Initialize the year's data
    investmentGrowth[i] = {
      year: new Date().getFullYear() + i,
      value: 0,
      months: [
        { month: "January", value: null },
        { month: "February", value: null },
        { month: "March", value: null },
        { month: "April", value: null },
        { month: "May", value: null },
        { month: "June", value: null },
        { month: "July", value: null },
        { month: "August", value: null },
        { month: "September", value: null },
        { month: "October", value: null },
        { month: "November", value: null },
        { month: "December", value: null },
      ],
    };

    const monthlyGrowPercentage = 1 + yearlyGrowth / 12 / 100;

    for (let k = 0; k < 12; k++) {
      if (i === 0 && k === 0) {
        investmentGrowth[i].months[k].value = parseFloat(
          (monthlyContribution + initialInvestment) * monthlyGrowPercentage,
        ).toFixed(2);
      } else if (k === 0) {
        investmentGrowth[i].months[k].value = parseFloat(
          investmentGrowth[i - 1].months[11].value * monthlyGrowPercentage +
            monthlyContribution,
        ).toFixed(2);
      } else {
        investmentGrowth[i].months[k].value = parseFloat(
          investmentGrowth[i].months[k - 1].value * monthlyGrowPercentage +
            monthlyContribution,
        ).toFixed(2);
      }
    }

    investmentGrowth[i].value = investmentGrowth[i].months[11].value;
  }

  return investmentGrowth;
}
