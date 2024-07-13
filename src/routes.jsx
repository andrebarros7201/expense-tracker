import App from "./App.jsx";
import Chart from "./Pages/Chart.jsx";
import Fire from "./Pages/Fire.jsx";
import Budget from "./Pages/Budget.jsx";
import InvestmentPrediction from "./Pages/InvestmentPrediction.jsx";

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
