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
import miningErpThumbnail from "../assets/images/mining-erp.png";
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
import { PiArticleMedium } from "react-icons/pi";

export const headerInfoName = "TC. Lin";

export const navMenuItems = [
  { name: "Home", icon: <MdOutlineHome /> },
  { name: "About", icon: <MdOutlinePersonPin /> },
  { name: "Education", icon: <MdOutlineSchool /> },
  { name: "Experience", icon: <MdWorkOutline /> },
  { name: "Projects", icon: <MdOutlineLibraryBooks /> },
  { name: "Blogs", icon: <PiArticleMedium /> },
  { name: "Contact", icon: <MdMailOutline /> },
];

export const socialMediaIcons = {
  LinkedIn: <AiFillLinkedin />,

  Medium: <AiFillMediumSquare />,

  GitHub: <AiFillGithub />,

  CV: <AiFillIdcard />,
};

export const educationIcons = {
  QUT: qutLogo,
  UQ: uqLogo,
};

export const workIcons = {
  qut: qutLogo,
  spingence: spingenceLogo,
  ksi: ksiLogo,
  jastudio: jaLogo,
};

export const portfolioIcons = {
  linkedin: linkedinThumbnail,
  medium: mediumThumbnail,
  jastudio: jaThumbnail,
  qut: qutThumbnail,
  fruitvision: fruitVisionThumbnail,
  drowsiness: drowsinessThumbnail,
  duck: duckSegmentationThumbnail,
  aiimgcentre: aiImageCenterThumbnail,
  aibrush: labelThumbnail,
  "ai-trainer": aiTrainingThumbnail,
  "airline-satisfaction": airlineThumbnail,
  "board-game-framework": boardGameThumbnail,
  "food-shopping": ecommerceThumbnail,
  "art-trading": artShopThumbnail,
  "erp-accounting": erpThumbnail,
  "erp-geological": miningErpThumbnail,
  "covid-tracker": covidThumbnail,
  "bi-bicycle": bicycleThumbnail,
  "bi-grocery": groceryThumbnail,
  more: moreThumbnail,
};
