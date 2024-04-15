import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { socialMediaIcons } from "../../utils/data";

import aboutPic from "../../assets/images/about-pic.jpg";

import "./About.css";

function About({ summary, socialMedia, cvGroups }) {
  return (
    <section id="about" className="about">
      <div className="aboutLeft">
        <PageTitle title="About Me" description="Know More" />
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
              <span className="aboutLeftSocialIcon">
                {socialMediaIcons[item["name"]]}
              </span>
              <p>{item["name"]}</p>
            </a>
          ))}
        </div>
        <div className="aboutLeftCVGroups">
          <p>Mandarin CVs:</p>
          {cvGroups.map((cv) => (
            <a
              className="aboutLeftCV"
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
