import App from "./App.jsx";
import Chart from "./pages/Chart.jsx";
import Fire from "./pages/Fire.jsx";
import Budget from "./pages/Budget.jsx";
import InvestmentPrediction from "./pages/InvestmentPrediction.jsx";

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
