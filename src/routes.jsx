import App from "./App.jsx";
import Table from "./components/details/Table.jsx";
import Chart from "./components/details/Chart.jsx";
import Fire from "./components/details/Fire.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Table />,
      },
      {
        path: "chart",
        element: <Chart />,
      },
      {
        path: "fire",
        element: <Fire />,
      },
    ],
  },
];

export default routes;
