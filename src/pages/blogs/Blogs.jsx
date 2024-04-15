import React, { useEffect, useState } from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { mediumApi } from "../../apis/api";

import { AiFillMediumSquare } from "react-icons/ai";
import "./Blogs.css";

function Blogs({ mediumLink }) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const onFilterChange = (e) => {
    let value = e.target.value;
    if (value) {
      let filtered = articles.filter((article) => {
        return article["title"].toLowerCase().includes(value.toLowerCase());
      });
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles([...articles]);
    }
  };

  useEffect(() => {
    fetch(mediumApi)
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  useEffect(() => {
    setFilteredArticles([...articles]);
  }, [articles]);

  return (
    <section id="blogs" className="blogs">
      <PageTitle title="Blogs" description="Sharing Knowledges" />
      <div className="blogsContainer">
        <p className="blogsContainerTitle">My Latest 10 Articles</p>
        <input
          type="text"
          className="blogsFilterInput"
          placeholder="Filter by title..."
          onChange={onFilterChange}
        />
      </div>
      <Swiper
        className="blogsCards"
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
          padding: "0 0 25px 0",
        }}
      >
        {filteredArticles.map((article) => (
          <SwiperSlide key={article["title"]} className="blogsCard">
            <div className="blogsArticleThumbnailFrame">
              <img
                className="blogsArticleThumbnail"
                src={
                  article["description"]
                    .toString()
                    .match(/<img[^>]+src="([^">]+)"/)[1]
                }
                alt="thumbnail"
              />
            </div>
            <div className="blogsArticle">
              <p className="blogsArticleTitle">
                {article["title"].length > 42
                  ? article["title"].slice(0, 42) + "..."
                  : article["title"]}
              </p>
              {article["description"].length > 150 ? (
                <div
                  className="blogsArticleDescription"
                  dangerouslySetInnerHTML={{
                    __html: article["description"].slice(0, 120) + "...",
                  }}
                ></div>
              ) : (
                <div
                  className="blogsArticleDescription"
                  dangerouslySetInnerHTML={{ __html: article["description"] }}
                ></div>
              )}
              {/* <p className="blogsArticleDescription">
                {article["description"].length > 100
                  ? article["description"].slice(0, 100) + "..."
                  : article["description"]}
              </p> */}

              <div className="articleLinkContainer">
                <a
                  href={article["link"]}
                  className="articleLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillMediumSquare />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="blogsViewMoreText">
        Read more on{" "}
        <a href={mediumLink} target="_blank" rel="noreferrer">
          Medium
        </a>
      </p>
    </section>
  );
}

export default Blogs;
