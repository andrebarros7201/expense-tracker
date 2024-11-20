import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <AppContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Outlet />
      </AppContext.Provider>
    </>
  );
}

export default App;
