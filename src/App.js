import React, { useCallback } from "react";

import Header from "./components/header/Header";
import Nav from "./components/navPanel/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Education from "./pages/education/Education";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { particlesOptions } from "./utils/config";

import "./App.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function App() {
  //#region particlejs configuration
  //eslint-disable-next-line
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  //eslint-disable-next-line
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  //#endregion

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="fixed inset-0 -z-10"
        options={particlesOptions}
      />
      <Header />
      <Nav />
      <Home />
      <About />
      <Education />
    </div>
  );
}

export default App;
