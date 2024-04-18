import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import { socialMediaIcons } from "../../utils/data";

import profilePic from "../../assets/images/home-profile-pic.jpeg";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "./Home.css";

function Home({ description, name, youtube, socialMedia }) {
  //eslint-disable-next-line
  const [text, count] = useTypewriter({
    words: description,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="home" id="">
      <div className="homeDescription">
        <p className="homeDescriptionName">{name}</p>
        <span className="homeDescriptionBreak" />
        <p className="homeDescriptionHeading">
          {text}
          <Cursor cursorColor="text-primaryColor" />
        </p>

        <a
          className="homeDescriptionButton"
          href={youtube}
          target="_blank"
          rel="noreferrer"
        >
          Intro Video
        </a>
        <div className="homeDescriptionMore">
          <a href="#about">
            <MdKeyboardDoubleArrowDown />
            Scroll Down
          </a>
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
              {socialMediaIcons[item["name"]]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
