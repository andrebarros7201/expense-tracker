import App from "./App.jsx";
import Investments from "./pages/Investments.jsx";
import PersonalFinances from "./pages/PersonalFinances.jsx";
import Market from "./components/market/Market.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/investments",
        element: <Investments />,
      },
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
    ],
  },
];

export default routes;
