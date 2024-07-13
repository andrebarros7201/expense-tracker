import App from "./App.jsx";
import Chart from "./components/Chart.jsx";
import Fire from "./components/Fire.jsx";
import Budget from "./components/Budget.jsx";
import InvestmentPrediction from "./components/investmentPrediction/InvestmentPrediction.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Budget />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
      {
        path: "fire",
        element: <Fire />,
      },
      {
        path: "investment",
        element: <InvestmentPrediction />,
      },
    ],
  },
];

export default routes;
