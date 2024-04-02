import React, { useState, useEffect } from "react";

import { navMenuItems, navMenuIcons } from "../../utils/data";

import "./Nav.css";
import { MdMailOutline } from "react-icons/md";

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
        {navMenuIcons.map((navMenuIcon, idx) => (
          <a
            key={navMenuItems[idx]}
            className={
              navMenuItems[idx] === "Contact"
                ? "navMenuIcon navContactIcon"
                : "navMenuIcon"
            }
            href={
              navMenuItems[idx] === "Home"
                ? "#"
                : "#" + navMenuItems[idx].toLowerCase()
            }
            onClick={() =>
              triggerNav(
                navMenuItems[idx] === "Home" ? "#" : "#" + navMenuItems[idx]
              )
            }
          >
            {navMenuIcon}
          </a>
        ))}
      </nav>
      <a href="#contact" onClick={() => triggerNav("#contact")}>
        <MdMailOutline />
      </a>
    </div>
  );
}

export default Nav;
