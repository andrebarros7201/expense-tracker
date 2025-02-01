import "./App.scss";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
