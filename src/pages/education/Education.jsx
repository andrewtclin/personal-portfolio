import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { educationInfo } from "../../utils/data";

import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="educationTitle">
        <p className="educationTitleSub">My background</p>
        <p className="educationTitleMain">Education</p>
      </div>
      <Swiper
        className="educationCards"
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
          "--swiper-pagination-bullet-inactive-color": "rgb(107 114 128)",
          "--swiper-theme-color": "rgb(107 114 128)",
        }}
      >
        {educationInfo.map((info) => (
          <SwiperSlide key={info["institution"]} className="educationCard">
            <div className="educationCardLogoFrame">
              <img
                className="educationCardLogo"
                src={info.logo}
                alt={info.institution}
              />
            </div>
            <p className="educationCardDegree">{info.degree}</p>
            <p className="educationCardInstitution">{info.institution}</p>
            <p className="educationCardDate">{info.date}</p>
            {info["GPA"] ? (
              <p className="educationGPA">GPA: {info["GPA"]}</p>
            ) : (
              ""
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {educationInfo[0]["Awards"].length ? (
        <div className="educationAwards">
          <p className="educationAwardsTitle">Awards</p>
          {educationInfo[0]["Awards"].map((award, idx) => (
            <p key={"award" + idx} className="educationAward">
              • {award}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Education;
