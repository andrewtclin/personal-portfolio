import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { workExperience } from "../../utils/data";

import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <PageTitle title="Experience" description="Professional Work" />
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
        {workExperience.map((info) => (
          <SwiperSlide key={info["institution"]} className="experienceCard">
            <div className="experienceCardLogoFrame">
              <img
                className="experienceCardLogo"
                src={info["company_logo"]}
                alt={info["company"]}
              />
            </div>
            <p className="experienceCardTitle">{info.title}</p>
            <p className="experienceCardCompany">{info.company}</p>
            <p className="experienceCardDate">{info.date}</p>
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
        View CV for <span>Professional Projects</span>
      </p>
    </section>
  );
}

export default Experience;
