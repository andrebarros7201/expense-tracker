import App from "./App.jsx";
import Budget from "./pages/Budget.jsx";
import InvestmentPrediction from "./pages/InvestmentPrediction.jsx";
import Market from "./pages/Market.jsx";
import PersonalFinances from "./pages/PersonalFinances.jsx";

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
        path: "/market",
        element: <Market />,
      },
      {
        path: "/personal-finances",
        element: <PersonalFinances />,
      },
      {
        path: "investment",
        element: <InvestmentPrediction />,
      },
    ],
  },
];

export default routes;
