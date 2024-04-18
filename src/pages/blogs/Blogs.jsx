import React, { useEffect, useState } from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { mediumApi } from "../../apis/api";

import { AiFillMediumSquare } from "react-icons/ai";
import "./Blogs.css";

function Blogs({ mediumLink }) {
  //#region ------ variable declaration ------
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  //#endregion

  //#region ------ functions ------
  // filter articles by title
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
  //#endregion

  //#region ------ lifecycle ------
  // api call to medium
  useEffect(() => {
    fetch(mediumApi)
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  // set filtered articles
  useEffect(() => {
    setFilteredArticles([...articles]);
  }, [articles]);
  //#endregion

  return (
    <section id="blogs" className="blogs">
      <PageTitle title="Blogs" description="Sharing Knowledges" />
      <div className="blogsContainer">
        <p className="blogsContainerTitle">My Latest 10 Articles</p>
        {/* Filtering articles */}
        <input
          type="text"
          className="blogsFilterInput"
          placeholder="Filter by title..."
          onChange={onFilterChange}
        />
      </div>
      {/* Main Blog Info */}
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
        {/* Each Article Component */}
        {filteredArticles.map((article) => (
          <SwiperSlide key={article["title"]} className="blogsCard">
            {/* Article Snapshot */}
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
              {/* Title */}
              <p className="blogsArticleTitle">
                {article["title"].length > 42
                  ? article["title"].slice(0, 42) + "..."
                  : article["title"]}
              </p>
              {/* Article Preview */}
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
              {/* Link to Article */}
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
      {/* Link to blog page */}
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
