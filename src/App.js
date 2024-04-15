import React, { useCallback, useEffect, useState } from "react";

import Header from "./components/header/Header";
import Nav from "./components/navPanel/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Blogs from "./pages/blogs/Blogs";
import { personalIntroApi } from "./apis/api";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { particlesOptions } from "./utils/config";

import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
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

  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    fetch(personalIntroApi)
      .then((res) => res.json())
      .then((data) => setPersonalInfo(data));
    //eslint-disable-next-line
  }, []);

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
      <Home
        description={
          Object.keys(personalInfo).length
            ? personalInfo["description"]
            : ["Loading..."]
        }
        name={
          Object.keys(personalInfo).length ? personalInfo["name"] : "Loading..."
        }
        youtube={
          Object.keys(personalInfo).length ? personalInfo["youtube"] : "loading"
        }
        socialMedia={
          Object.keys(personalInfo).length
            ? personalInfo["socialMedia"]
            : [{ name: "Loading...", link: "Loading..." }]
        }
      />
      <About
        summary={
          Object.keys(personalInfo).length
            ? personalInfo["summary"]
            : "Loading..."
        }
        socialMedia={
          Object.keys(personalInfo).length
            ? personalInfo["socialMedia"]
            : [{ name: "Loading...", link: "Loading..." }]
        }
        cvGroups={
          Object.keys(personalInfo).length
            ? personalInfo["cnCVs"]
            : [{ name: "Loading...", link: "Loading..." }]
        }
      />
      <Education
        educationInfo={
          Object.keys(personalInfo).length
            ? personalInfo["education"]
            : [
                {
                  id: "Loading...",
                  institution: "Loading...",
                  degree: "Loading...",
                  Awards: ["Loading..."],
                  date: "Loading...",
                },
              ]
        }
      />
      <Experience
        workExperience={
          Object.keys(personalInfo).length
            ? personalInfo["workExperience"]
            : [
                {
                  id: "Loading...",
                  title: "Loading...",
                  company: "Loading...",
                  date: "Loading...",
                  job_summary: ["Loading..."],
                },
              ]
        }
        cvlink={
          Object.keys(personalInfo).length
            ? personalInfo["socialMedia"].find(
                (media) => media["name"] === "CV"
              )?.link
            : "Loading..."
        }
      />
      <Portfolio
        portfolioWorks={
          Object.keys(personalInfo).length
            ? personalInfo["portfolioWorks"]
            : [
                {
                  id: "Loading...",
                  title: "Loading...",
                  type: "Loading...",
                  description: "Loading...",
                  link: "Loading...",
                  github: "Loading...",
                  youtube: "Loading...",
                },
              ]
        }
      />
      <Skills
        skills={
          Object.keys(personalInfo).length
            ? personalInfo["skills"]
            : [
                {
                  category: "Loading...",
                  skills: ["Loading..."],
                },
              ]
        }
      />
      <Blogs
        mediumLink={
          Object.keys(personalInfo).length
            ? personalInfo["socialMedia"].find(
                (media) => media["name"] === "Medium"
              )?.link
            : "Loading..."
        }
      />
      <Footer
        socialMedia={
          Object.keys(personalInfo).length
            ? personalInfo["socialMedia"]
            : [{ name: "Loading...", link: "Loading..." }]
        }
        email={
          Object.keys(personalInfo).length
            ? personalInfo["email"]
            : "Loading..."
        }
      />
    </div>
  );
}

export default App;
