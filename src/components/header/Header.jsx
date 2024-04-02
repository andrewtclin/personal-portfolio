import React from "react";

import { headerInfoName } from "../../utils/data";

import headerAvatar from "../../assets/images/header-avatar.jpg";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerInfo">
        <img
          className="headerInfoAvatar"
          src={headerAvatar}
          alt="headerAvatar"
        />
        <p className="headerInfoName">{headerInfoName}</p>
      </div>
    </div>
  );
}

export default Header;
