export default function calculateInvestmentGrowth(
  years,
  initialInvestment,
  monthlyContribution,
  yearlyGrowth,
) {
  const investmentGrowth = [];
  const monthlyGrowPercentage = 1 + yearlyGrowth / 12 / 100;
  let balance = initialInvestment;

  for (let i = 0; i < years; i++) {
    // Initialize the year's data
    const yearData = {
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

    for (let month = 0; month < 12; month++) {
      // Add the monthly contribution
      balance += monthlyContribution;

      // Apply the growth percentage (compounding the interest)
      balance *= monthlyGrowPercentage;

      // Store the rounded balance for the month
      yearData.months[month].value = balance.toFixed(2);
    }

    // Store the year's ending balance as the yearly value
    yearData.value = yearData.months[11].value;
    investmentGrowth.push(yearData);
  }

  return investmentGrowth;
}
