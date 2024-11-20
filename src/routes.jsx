import App from "./App.jsx";
import PersonalFinances from "./pages/PersonalFinances.jsx";
import Market from "./pages/Market.jsx";

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
    ],
  },
];

export default routes;
