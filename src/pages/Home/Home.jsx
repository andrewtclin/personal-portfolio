import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import { socialMedia, myName, myDescription } from "../../utils/data";
import profilePic from "../../assets/images/home-profile-pic.jpeg";

import "./Home.css";

function Home() {
  //eslint-disable-next-line
  const [text, count] = useTypewriter({
    words: myDescription,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="home" id="">
      <div className="homeDescription">
        <p className="homeDescriptionName">{myName}</p>
        <span className="homeDescriptionBreak" />
        <p className="homeDescriptionHeading">
          {text}
          <Cursor cursorColor="text-primaryColor" />
        </p>
        <div className="homeDescriptionButtons">
          <button className="homeDescriptionButton homeCvBtn">
            Download CV
          </button>
          <button className="homeDescriptionButton homeIntroBtn">
            Intro. Video
          </button>
        </div>
      </div>
      <div className="homeProfile">
        <div className="homeProfileFrame">
          <img className="homeProfilePic" src={profilePic} alt="Profile" />
        </div>
        <div className="homeSocialMedia">
          {socialMedia.map((item) => (
            <a
              key={item["name"]}
              href={item["link"]}
              target="_blank"
              rel="noreferrer"
            >
              {item["icon"]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
