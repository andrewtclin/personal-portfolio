import PageTitle from "../../components/pageTitle/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { educationIcons } from "../../utils/data";

import "./Education.css";

function Education({ educationInfo }) {
  return (
    <section id="education" className="education">
      <PageTitle title="Education" description="My Background" />
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
          "--swiper-pagination-bullet-inactive-color": "#D4613C",
          "--swiper-theme-color": "#D4613C",
        }}
      >
        {educationInfo.map((info) => (
          <SwiperSlide key={info["institution"]} className="educationCard">
            <div className="educationCardLogoFrame">
              <img
                className="educationCardLogo"
                src={educationIcons[info["id"]]}
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
