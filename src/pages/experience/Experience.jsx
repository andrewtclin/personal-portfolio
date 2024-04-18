import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { workIcons } from "../../utils/data";

import "./Experience.css";

function Experience({ workExperience, cvlink }) {
  return (
    <section id="experience" className="experience">
      <PageTitle title="Experience" description="Professional Work" />
      {/* Main Experience Info */}
      <Swiper
        className="experienceCards"
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
        }}
        style={{
          "--swiper-pagination-bullet-inactive-color": "#D4613C",
          "--swiper-theme-color": "#D4613C",
          padding: "0 0 25px 0",
        }}
      >
        {/* Each Experience Info */}
        {workExperience.map((info) => (
          <SwiperSlide key={info["company"]} className="experienceCard">
            {/* Company Logo */}
            <div className="experienceCardLogoFrame">
              <img
                className="experienceCardLogo"
                src={workIcons[info["id"]]}
                alt={info["company"]}
              />
            </div>
            {/* Position */}
            <p className="experienceCardTitle">{info.title}</p>
            {/* Company Name */}
            <p className="experienceCardCompany">{info.company}</p>
            {/* Date */}
            <p className="experienceCardDate">{info.date}</p>
            {/* Description of Position */}
            <div className="experienceCardSummary">
              {info["job_summary"].map((summary, idx) => (
                <p
                  key={info["company"] + idx}
                  className="experienceCardSummaryInfo"
                >
                  <b>{"• " + summary.split(":")[0]}:</b> {summary.split(":")[1]}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="experienceProjectText">
        Check Professional Projects from{" "}
        <a href={cvlink} target="_blank" rel="noreferrer">
          CV
        </a>
      </p>
    </section>
  );
}

export default Experience;
