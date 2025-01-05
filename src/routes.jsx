import App from "./App.jsx";
import PersonalFinances from "./pages/PersonalFinances.jsx";
import Market from "./pages/Market.jsx";
import MarketTickerInfo from "./components/market/marketTickerInfo/MarketTickerInfo.jsx";
import MarketTopGainersLosers from "./components/market/marketTopGainersLosers/MarketTopGainersLosers.jsx";

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
        children: [
          { index: true, element: <MarketTopGainersLosers /> },
          {
            path: "/market/:ticker/:country",
            element: <MarketTickerInfo />,
          },
        ],
      },
    ],
  },
];

export default routes;
