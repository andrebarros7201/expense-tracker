import App from "./App.jsx";
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
        path: "investment",
        element: <InvestmentPrediction />,
      },
    ],
  },
];

export default routes;
