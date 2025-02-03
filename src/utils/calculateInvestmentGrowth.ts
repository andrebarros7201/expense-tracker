interface MonthlyInvestment {
  month: string;
  value: number;
}

interface YearlyInvestment {
  year: number;
  value: number;
  months: MonthlyInvestment[];
}

function calculateInvestmentGrowth(
  years: number,
  initialInvestment: number,
  monthlyContribution: number,
  yearlyGrowth: number,
): YearlyInvestment[] {
  const investmentGrowth: YearlyInvestment[] = [];
  const monthlyGrowPercentage: number = 1 + yearlyGrowth / 12 / 100;
  let balance: number = initialInvestment;

  for (let i = 0; i < years; i++) {
    // Initialize the year's data
    const yearData = {
      year: new Date().getFullYear() + i,
      value: 0,
      yearProfit: 0,
      months: [
        { month: "January", value: 0 },
        { month: "February", value: 0 },
        { month: "March", value: 0 },
        { month: "April", value: 0 },
        { month: "May", value: 0 },
        { month: "June", value: 0 },
        { month: "July", value: 0 },
        { month: "August", value: 0 },
        { month: "September", value: 0 },
        { month: "October", value: 0 },
        { month: "November", value: 0 },
        { month: "December", value: 0 },
      ],
    };

    for (let month = 0; month < 12; month++) {
      balance += monthlyContribution;
      balance *= monthlyGrowPercentage;
      yearData.months[month].value = Number(balance.toFixed(2));
    }

    yearData.value = yearData.months[11].value;
    yearData.yearProfit =
      i === 0 ? 0 : yearData.value - investmentGrowth[i - 1].value;
    investmentGrowth.push(yearData);
  }

  return investmentGrowth;
}

export default calculateInvestmentGrowth;
