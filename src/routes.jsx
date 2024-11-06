import App from "./App.jsx";
import Market from "./pages/Market.jsx";
import PersonalFinances from "./pages/PersonalFinances.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/market",
        element: <Market />,
      },
      {
        index: true,
        element: <PersonalFinances />,
      },
      {
        path: "/personal-finances",
        element: <PersonalFinances />,
      },
    ],
  },
];

export default routes;
