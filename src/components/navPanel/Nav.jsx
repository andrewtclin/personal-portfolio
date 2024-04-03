import React, { useState, useEffect } from "react";

import { navMenuItems } from "../../utils/data";

import "./Nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  console.log(activeNav);

  const triggerNav = (navItem) => setActiveNav(navItem);

  useEffect(() => {
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

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="nav">
      <nav className="navList">
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
            onClick={() =>
              triggerNav(item["name"] === "Home" ? "#" : "#" + item["name"])
            }
          >
            {item["icon"]}
          </a>
        ))}
      </nav>
      <a
        className="navContactIconSm"
        href="#contact"
        onClick={() => triggerNav("#contact")}
      >
        {navMenuItems[navMenuItems.length - 1]["icon"]}
      </a>
    </div>
  );
}

export default Nav;
