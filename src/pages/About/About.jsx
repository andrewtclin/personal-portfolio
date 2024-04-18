import React, { useEffect, useState } from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { socialMediaIcons } from "../../utils/data";

import aboutPic from "../../assets/images/about-pic.jpg";

import "./About.css";

function About({ summary, socialMedia, cvGroups }) {
  const [githubProfile, setGithubProfile] = useState({});

  useEffect(() => {
    async function getGithubUserProfile() {
      try {
        const response = await fetch(
          "https://api.github.com/users/andrewtclin",
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching GitHub profile:", error.message);
        throw error;
      }
    }

    getGithubUserProfile()
      .then((profile) => {
        setGithubProfile({
          bio: profile.bio,
          public_repos: profile.public_repos,
          private_repos: profile.total_private_repos,
          last_updated: profile.updated_at,
        });
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

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

        {Object.keys(githubProfile).length ? (
          <div className="aboutLeftGithubInfo">
            <p>
              <span>GitHub Bio:</span> {githubProfile["bio"]}
            </p>
            <p>
              <span>GitHub Repos:</span>{" "}
              {githubProfile["public_repos"] + githubProfile["private_repos"]}
            </p>
            <p>
              <span>Last Updated:</span>{" "}
              {new Date(githubProfile["last_updated"]).toLocaleString("en-AU", {
                timeZone: "Australia/Brisbane",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              })}
            </p>
          </div>
        ) : (
          "Loading..."
        )}

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
