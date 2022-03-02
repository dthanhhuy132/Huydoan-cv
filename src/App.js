import "animate.css";
import "./App.scss";

import { createContext, useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Orientation from "./components/Orientation";

export const OptionContext = createContext("");
function App() {
  const [isShowLoadingPage, setIsShowLoadingPage] = useState(false);
  const [themeMode, setThemeMode] = useState("light");
  const [language, setLanguage] = useState("vn");

  const contextValue = {
    themeMode,
    language,
  };

  const initProps = {
    themeMode,
    setThemeMode,
    language,
    setLanguage,
  };

  useEffect(() => {
    setTimeout(() => setIsShowLoadingPage(false), 5300);
  }, ["once"]);

  return (
    <div className="App">
      {isShowLoadingPage ? (
        <LoadingPage />
      ) : (
        <OptionContext.Provider value={contextValue}>
          <div className="home-page">
            <Navigation initProps={initProps} />

            <div className="home-page__content">
              <Routes>
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/orientation" element={<Orientation />} />
              </Routes>
            </div>
          </div>
        </OptionContext.Provider>
      )}
    </div>
  );
}

export default App;
