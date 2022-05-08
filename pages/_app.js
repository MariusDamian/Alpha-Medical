import "../styles/globals.css";
import { dataContext } from "../Util/ContextData";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <dataContext.Provider value={{ scrolled, menu, setMenu, currentCategory, setCurrentCategory, dark, setDark }}>
      <Component {...pageProps} />
    </dataContext.Provider>
  );
}

export default MyApp;
