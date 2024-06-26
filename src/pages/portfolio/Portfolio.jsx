import React from "react";
import PageTitle from "../../components/pageTitle/PageTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { portfolioIcons } from "../../utils/data";

import { AiFillYoutube, AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

import "./Portfolio.css";

function Portfolio({ portfolioWorks }) {
  return (
    <section id="projects" className="portfolio">
      <PageTitle title="Portfolio" description="My works in AI, ML, Software" />
      {/* Main Portfolio Info */}
      <Swiper
        className="portfolioCards"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        style={{
          "--swiper-pagination-bullet-inactive-color": "#D4613C",
          "--swiper-theme-color": "#D4613C",
        }}
      >
        {/* Each Portfolio Info */}
        {portfolioWorks.map((portfolioWork) => (
          <SwiperSlide key={portfolioWork["title"]} className="portfolioCard">
            {/* Work Snapshot */}
            <div className="portfolioCardLogoFrame">
              <img
                className="portfolioCardLogo"
                src={portfolioIcons[portfolioWork["id"]]}
                alt={portfolioWork["title"]}
              />
            </div>
            {/* Title */}
            <div className="portfolioInfo">
              <p className="portfolioInfoTitle">{portfolioWork["title"]}</p>
              <p className="portfolioInfoType">{portfolioWork["type"]}</p>
              <p className="portfolioInfoDescription">
                {/* Description */}
                {portfolioWork["description"]}
              </p>
            </div>
            {/* Links to work */}
            <div className="portfolioWorkLinks">
              {portfolioWork.youtube ? (
                <a
                  href={portfolioWork.youtube}
                  className="portfolioWorkLink portfolioWorkLinkPrimary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillYoutube />
                </a>
              ) : (
                ""
              )}
              {portfolioWork.link ? (
                <a
                  href={portfolioWork.link}
                  className="portfolioWorkLink portfolioWorkLinkPrimary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a>
              ) : (
                ""
              )}

              {portfolioWork.github ? (
                <a
                  href={portfolioWork.github}
                  className="portfolioWorkLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
              ) : (
                ""
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Portfolio;
