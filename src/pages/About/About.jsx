import React from "react";

import { summary, socialMedia, cvGroups } from "../../utils/data";

import aboutPic from "../../assets/images/about-pic.jpg";

import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="aboutLeft">
        <div className="aboutLeftTitle">
          <p className="aboutLeftTitleSub">Know More</p>
          <p className="aboutLeftTitleMain">About Me</p>
        </div>
        <p className="aboutLeftSummary">{summary}</p>
        <div className="aboutLeftSocialGroups">
          {socialMedia.map((item) => (
            <a
              key={item["name"]}
              className="aboutLeftSocialGroup"
              href={item["link"]}
              target="_blank"
              rel="noreferrer"
            >
              <span className="aboutLeftSocialIcon">{item["icon"]}</span>
              <p>{item["name"]}</p>
            </a>
          ))}
        </div>
        <div className="aboutLeftCVGroups">
          <p>Download My CVs:</p>
          {cvGroups.map((cv, idx) => (
            <a
              className={
                idx === cvGroups.length - 1
                  ? "aboutLeftCV"
                  : "aboutLeftCV aboutLeftCVBorder"
              }
              key={cv["name"]}
              href={cv["link"]}
              target="_blank"
              rel="noreferrer"
            >
              {cv["name"]}
            </a>
          ))}
        </div>
      </div>
      <div className="aboutRight">
        <img className="aboutRightPic" src={aboutPic} alt="About" />
      </div>
    </section>
  );
}

export default About;
