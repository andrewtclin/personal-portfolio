import qutLogo from "../assets/images/qut_logo.jpg";
import uqLogo from "../assets/images/uq_logo.png";
import spingenceLogo from "../assets/images/spingence_logo.jpg";
import ksiLogo from "../assets/images/ksi_logo.png";
import jaLogo from "../assets/images/JAstudio_logo.png";

import linkedinThumbnail from "../assets/images/linkedin_profile.png";
import mediumThumbnail from "../assets/images/medium_profile.png";
import jaThumbnail from "../assets/images/jastudio_profile.png";
import qutThumbnail from "../assets/images/qut_thumbnail.png";
import fruitVisionThumbnail from "../assets/images/fruit_vision_thumbnail.png";
import drowsinessThumbnail from "../assets/images/drowsiness_thumbnail.jpg";
import duckSegmentationThumbnail from "../assets/images/duck_segmentation_thumbnail.png";
import aiImageCenterThumbnail from "../assets/images/img_center_thumbnail.png";
import labelThumbnail from "../assets/images/label_thumbnail.png";
import aiTrainingThumbnail from "../assets/images/ai_training_thumbnail.png";
import airlineThumbnail from "../assets/images/ml_airline_thumbnail.png";
import boardGameThumbnail from "../assets/images/boardgame_thumbnail.png";
import ecommerceThumbnail from "../assets/images/ecommerce_thumbnail.png";
import artShopThumbnail from "../assets/images/art_shop_thumbnail.jpg";
import erpThumbnail from "../assets/images/erp_thumbnail.png";
import covidThumbnail from "../assets/images/covid_thumbnail.png";
import bicycleThumbnail from "../assets/images/bicycle_thumbnail.png";
import groceryThumbnail from "../assets/images/grocery_thumbnail.png";
import moreThumbnail from "../assets/images/more_thumbnail.png";

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

//#region Skills
export const skills = [
  {
    category: "Domains",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Software Engineering",
    ],
  },
  {
    category: "Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "ReactJS",
      "Vue",
      "Angular",
      ".NET",
      "Flask",
      "Django",
      "NodeJS",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "C#", "Java", "C++", "JavaScript"],
  },
  {
    category: "MLOps & DevOps",
    skills: [
      "HuggingFace",
      "MLFlow",
      "Azure",
      "AWS",
      "Gitlab/GitHub",
      "Docker",
      "Kubernetes",
    ],
  },
  { category: "Databases", skills: ["MSSQL", "MongoDB", "Reddis"] },
  { category: "Languages", skills: ["English (Native)", "Mandarin (Native)"] },
  {
    category: "Certificates",
    skills: ["Neural Networks and Deep Learning (Credential ID: VF8UQ63ZUNFW)"],
  },
];
//#endregion

//#region Portfolio
export const portfolioWorks = [
  {
    title: "LinkedIn Profile",
    type: "Persornal Information",
    description: "Find out more about me on LinkedIn!",
    img: linkedinThumbnail,
    link: "https://www.linkedin.com/in/andrewtclin/",
    github: "",
  },
  {
    title: "Medium Blogs",
    type: "Persornal Information",
    description:
      "As a passionate lifelong learner, I love sharing my expertise through articles regarding technology.",
    img: mediumThumbnail,
    link: "https://medium.com/@chuntcdj",
    github: "",
  },
  {
    title: "JAStudio Technology",
    type: "Persornal Information",
    description:
      "Aside from work, my team and I run a freelance business in software under JAStudio Technology.",
    img: jaThumbnail,
    link: "https://jastudio-tech.com/",
    github: "",
  },
  {
    title: "QUT Best Paper Awards 2023",
    type: "Research Paper Honours",
    description:
      "Research Topic: PCA-Clustering: Relationship between Downtime Events & Attributes in Steel Manufacturing.",
    img: qutThumbnail,
    link: "https://drive.google.com/file/d/1dYQKtI0pwKGeFOjMNB5uGy1HIh4mv8AY/view",
    github: "",
  },
  {
    title: "Fruit Vision",
    type: "Artificial Intelligence",
    description:
      "This project trains a computer vision model to identify 100 different fruit classes (transfer learning of EfficientNetB2) - 9.1M parameters.",
    img: fruitVisionThumbnail,
    link: "https://huggingface.co/spaces/tclin/fruit_vision_100",
    github: "https://github.com/andrewtclin/fruit_vision_model",
  },
  {
    title: "Deep Learning Drowsiness Detections",
    type: "Artificial Intelligence",
    description:
      "Detects if a person is drowsy by Computer Vision. Implements YOLOv5 to custom-build a deep learning model.\nThe demo allows the users to upload or use real-time webcam object detections.",
    img: drowsinessThumbnail,
    link: "",
    youtube: "https://youtu.be/KFHNxGSGBc8",
    github:
      "https://github.com/andrewtclin/drowsiness-detections/blob/master/backend/core/model/drowsiness_detection.ipynb",
  },
  {
    title: "Duck Segmentation",
    type: "Artificial Intelligence",
    description:
      "Deep learning model that implements YOLOv8 to segment ducks in images.",
    img: duckSegmentationThumbnail,
    link: "",
    github:
      "https://github.com/andrewtclin/duck-segmentation-vision/blob/master/duck-segmentation.ipynb",
  },
  {
    title: "AI Image Centre Solution",
    type: "Artificial Intelligence",
    description:
      "This is an enterprise AI image storage and labelling platform solution, working similar to Google Drive.\nAI Image Labelling can be done on the same platform while seamlessly integrating to the AI training application.",
    img: aiImageCenterThumbnail,
    youtube: "https://youtu.be/WPQIDdTpDag",
    link: "https://www.behance.net/gallery/174480421/AI-Image-Centre-Solution",
    github: "https://github.com/andrewtclin/ai_image_center_solution",
  },
  {
    title: "AI Image Labelling Brush (Prototype)",
    type: "Artificial Intelligence",
    description:
      "This is a prototype AI image labelling 'brush' tool, allowing to upload, label, and download labelled labels of an images with coordinates.",
    img: labelThumbnail,
    link: "https://andrewtclin.pythonanywhere.com/",
    github: "https://github.com/andrewtclin/ai_image_brush_tool",
  },
  {
    title: "AI Trainer - Industrial 4.0",
    type: "Artificial Intelligence",
    description:
      "Enterprise Computer Vision AI training, embeddable to industrial applications.\nCapable of managing large scale training data.",
    img: aiTrainingThumbnail,
    link: "https://www.behance.net/gallery/174400439/Industrial-40-AI-Trainer",
    github: "",
  },
  {
    title: "Airline Service Satisfaction Predictions",
    type: "Artificial Intelligence",
    description:
      "A comprehensive data science analysis of airline company satisfaction. A ML model was trained upon utilizing the analyzed insight, obtaining the score of >90%.",
    img: airlineThumbnail,
    link: "",
    github:
      "https://github.com/andrewtclin/ml-airline-satisfaction-prediction/blob/master/Airline%20Satisfaction%20Analysis_Machine%20Learning%20%26%20Data%20Science.ipynb",
  },
  {
    title: "Robust & Reusuable Framework",
    type: "Software: C# Framework",
    description:
      "Designed an extensive, comprehensive, reusuable board game framework that can be widely reused. PDF user manual available.",
    img: boardGameThumbnail,
    link: "",
    github:
      "https://github.com/andrewtclin/board-game-framework-with-num-tic-tac-toe/blob/master/Game_Design_Manual.pdf",
  },
  {
    title: "Running Food Shopping Site",
    type: "Software: E-Commerce",
    description: "Fully functional food ecommerce site for a client in Taiwan.",
    img: ecommerceThumbnail,
    link: "https://www.privatecuisine.tw/products/%E7%B4%94%E7%85%89%E7%B4%85%E7%87%92%E8%BB%9F%E9%AA%A8%E8%82%891%E7%9B%922%E5%8C%85",
    github: "",
  },
  {
    title: "Running Art Trading Site",
    type: "Software: E-Commerce",
    description:
      "Fully functional artworks shopping platform with auctions for a client in Taiwan.",
    img: artShopThumbnail,
    link: "https://dfon.io/",
    github: "",
  },
  {
    title: "Enterprise ERP Accounting System",
    type: "Software: ERP",
    description:
      "Enterprise ERP system with complex data flow and calculations.",
    img: erpThumbnail,
    link: "https://www.behance.net/gallery/174401283/Enterprise-ERP-Accounting-System",
    github: "",
  },
  {
    title: "Covid-19 Cases Tracking",
    type: "Software: Web-App",
    description:
      "This Covid-19 tracker was built with map and countries during the pandemic period, including number of confirmed/recovered/death cases.",
    img: covidThumbnail,
    link: "https://track-covid19-jastudio.netlify.app/",
    github: "https://github.com/andrewtclin/covid-19-tracker",
  },

  {
    title: "BI - Bicycle Sales Analysis",
    type: "Business Intelligence",
    description: "Comprehensive Business Analysis for Bicycle Store.",
    img: bicycleThumbnail,
    link: "https://drive.google.com/file/d/1dabZTKyAjLwCChKtNSNluIlgpOGU-AwX/view?usp=sharing",
    github: "",
  },
  {
    title: "BI - Retail Grocery Store Analysis",
    type: "Business Intelligence",
    description: "Comprehensive Business Analysis for Grocery Store.",
    img: groceryThumbnail,
    link: "https://drive.google.com/file/d/1gIXxo3gUXoXXxWbCCEBY9yhp93kToKiN/view?usp=sharing",
    github: "",
  },
  {
    title: "More Projects...",
    type: "AI & Cross-Platform Softwares",
    description:
      "More undisclosed enterprise projects that need to stay confidential due to NDA contract in the field of AI Industrial Apps, ERP Systems, Cross-Platform Softwares.",
    img: moreThumbnail,
    link: "",
    github: "",
  },
];
//#endregion
