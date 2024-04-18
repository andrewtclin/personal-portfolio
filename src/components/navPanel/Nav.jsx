import React, { useState, useEffect } from "react";

import { navMenuItems } from "../../utils/data";

import "./Nav.css";

function Nav() {
  //#region ------ variable declaration ------
  const [activeNav, setActiveNav] = useState("#");
  const [isBottom, setIsBottom] = useState(false);
  //#endregion

  //#region ------ functions ------
  // setting current active page
  const triggerNav = (navItem) => setActiveNav(navItem);

  // scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  //#endregion

  //#region ------ lifecycle ------
  // navigation observer - change active nav based on the page
  useEffect(() => {
    // main observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.id;
            if (id === "skills") {
              id = "portfolio";
            }

            setActiveNav("#" + id);
            window.history.replaceState(null, null, "#" + id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // This means the callback will execute when the middle of the element is in the viewport
      }
    );

    const sections = document.querySelectorAll("section, header");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // footer observer - offset mobile nav panel when reaching footer
    const handleFooterIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      });
    };

    const footer = document.getElementById("footer");

    if (footer) {
      var footerObserver = new IntersectionObserver(handleFooterIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust as needed
      });
      footerObserver.observe(footer);
    }

    // cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      if (footer) {
        footerObserver.disconnect();
      }
    };
  }, []);
  //#endregion

  return (
    <div className="nav">
      <nav className={`navList ${isBottom ? "navListOffset" : ""}`}>
        {navMenuItems.map((item) => (
          <a
            key={item["name"]}
            className={
              activeNav.toLowerCase() === "#" + item["name"].toLowerCase() &&
              item["name"] !== "Contact"
                ? "navMenuIcon navActive"
                : activeNav.toLowerCase() === "#" && item["name"] === "Home"
                ? "navMenuIcon navActive"
                : item["name"] === "Contact"
                ? "navContactIcon"
                : "navMenuIcon"
            }
            href={
              item["name"] === "Home" ? "#" : "#" + item["name"].toLowerCase()
            }
            onClick={
              item["name"] === "Contact"
                ? () => scrollToBottom()
                : () =>
                    triggerNav(
                      item["name"] === "Home" ? "#" : "#" + item["name"]
                    )
            }
          >
            {item["icon"]}
          </a>
        ))}
      </nav>
      <a
        className="navContactIconSm"
        href="#contact"
        onClick={() => scrollToBottom()}
      >
        {navMenuItems[navMenuItems.length - 1]["icon"]}
      </a>
    </div>
  );
}

export default Nav;
