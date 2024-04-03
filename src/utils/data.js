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
];

export const myName = "Ta-Chun Lin | TC.";
export const myDescription = ["ML Engineer", "Software Engineer", "MCompSc."];
//#endregion
