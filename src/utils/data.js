import {
  MdWorkOutline,
  MdOutlineSchool,
  MdOutlineLibraryBooks,
  MdOutlinePersonPin,
  MdOutlineHome,
  MdMailOutline,
} from "react-icons/md";

import {
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillGithub,
  AiFillIdcard,
} from "react-icons/ai";

//#region Header
export const headerInfoName = "TC. Lin";

export const navMenuItems = [
  { name: "Home", icon: <MdOutlineHome /> },
  { name: "About", icon: <MdOutlinePersonPin /> },
  { name: "Education", icon: <MdOutlineSchool /> },
  { name: "Experience", icon: <MdWorkOutline /> },
  { name: "Projects", icon: <MdOutlineLibraryBooks /> },
  { name: "Contact", icon: <MdMailOutline /> },
];

//#endregion

//#region Home
export const socialMedia = [
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/andrewtclin/",
  },
  {
    name: "Medium",
    icon: <AiFillMediumSquare />,
    link: "https://medium.com/@chuntcdj",
  },
  {
    name: "GitHub",
    icon: <AiFillGithub />,
    link: "https://github.com/andrewtclin/",
  },
  {
    name: "CV",
    icon: <AiFillIdcard />,
    link: "https://drive.google.com/file/d/16oDl6uHZiTqCTZ4N2gaJCpFiKgTQNqCO/view?usp=sharing",
  },
];

export const myName = "Ta-Chun Lin | TC.";
export const myDescription = ["ML Engineer", "Software Engineer", "MCompSc."];

export const homeButton = {
  name: "Intro Video",
  link: "https://www.youtube.com/watch?v=p1jCz3IyCsY",
};
//#endregion

//#region About
export const summary =
  "I am an AI/ML Engineer and Software Engineer with 5+ years of experience. In AI sector, I have created powerful industrial computer vision applications, which are now one of the most extensively used Industrial 4.0 solutions in Taiwan's AI-driven Industrial Automation landscape; In Software Engineering, I have participated in developing large complex ERP systems and applications for several Taiwan's Central Government Departments.";

export const cvGroups = [
  // {
  //   name: "English",
  //   link: "https://drive.google.com/file/d/16oDl6uHZiTqCTZ4N2gaJCpFiKgTQNqCO/view?usp=sharing",
  // },
  {
    name: "Traditional Chinese",
    link: "https://drive.google.com/file/d/1dCNINJKG60k7q5Ymi1sbCJsaU2sXHHU6/view?usp=sharing",
  },
  {
    name: "Simplified Chinese",
    link: "https://drive.google.com/file/d/1HY7ZK2mKBlnuScn660tTNfOZX5a9sLOw/view?usp=sharing",
  },
];
//#endregion
