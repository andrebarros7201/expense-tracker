import App from "./App.jsx";
import PersonalFinances from "./pages/PersonalFinances.jsx";
import Market from "./pages/Market.jsx";
import MarketTickerInfo from "./components/market/marketTickerInfo/MarketTickerInfo.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PersonalFinances />,
      },
      {
        path: "/personal-finances",
        element: <PersonalFinances />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/market/:ticker",
        element: <MarketTickerInfo />,
      },
    ],
  },
];

export default routes;
