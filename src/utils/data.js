import qutLogo from "../assets/images/qut_logo.jpg";
import uqLogo from "../assets/images/uq_logo.png";
import spingenceLogo from "../assets/images/spingence_logo.jpg";
import ksiLogo from "../assets/images/ksi_logo.png";
import jaLogo from "../assets/images/JAstudio_logo.png";

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

//#region Education
export const educationInfo = [
  {
    institution: "Queensland University of Technology",
    logo: qutLogo,
    degree: "Master of IT, Computer Science",
    Awards: [
      "2x QUT Executive Dean's Commendation for Academic Excellence (GPA: 6.9/7.0, 99%)",
      "QUT Best Research Paper Awards 2023",
    ],
    date: "Feb. 2023 - Jun. 2024",
  },
  {
    institution: "The University of Queensland",
    logo: uqLogo,
    degree: "Bachelor of Science, Chemistry",
    Awards: [],
    date: "Feb. 2015 - Dec. 2017",
  },
];
//#endregion

//#region Experience
export const workExperience = [
  {
    title: "Full Stack Engineer (Computer Vision & Software)",
    company: "Spingence Technology",
    company_logo: spingenceLogo,
    date: "Oct. 2020 - Jan. 2023",
    job_summary: [
      "Automates Industrial Process with AI Defect Detection Models: Successfully used limited defective product samples to decrease missed detection rate by 50% and maximize product yield.",
      "Model Training & Research: Responsible of testing and integrating SOTA models, including classification/ detection/ segmentation/ explainable AI.",
      "Developed Innovative Image Storage Platform: Storing image hierarchically with varying user permissions, along with self-built image labelling tools with label formats. Processed images can be directly into AI trainer without using third-party labelling tool, acting as “one-stop solution”.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Sinon Corporation, KSI Inc.",
    company_logo: ksiLogo,
    date: "Dec. 2018 - Sep. 2020",
    job_summary: [
      "Development of ERP Accounting Systems for Taiwan's Central Government: With .NET MVC framework, Add, Read, Update, Delete of large data using efficient and secure SQL Stored Procedure.",
      "Development of Food Ordering Platform: Group Ordering functionality that integrates with POS machine.",
    ],
  },
  {
    title: "Software Engineer",
    company: "JAStudio Technology (Freelance Software Business)",
    company_logo: jaLogo,
    date: "Jan. 2019 - Jan. 2023",
    job_summary: [
      "Co-manages a Freelance Software Business: https://jastudio-tech.com/",
      "ML-Related Projects: Customed trained ML models and integrated in developed software.",
      "Software-Related Projects: Developed full-stack software for clients: ERP systems, desktop, web-based.",
    ],
  },
];
//#endregion
