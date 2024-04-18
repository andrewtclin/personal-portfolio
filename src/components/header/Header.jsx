import React, { useEffect, useState } from "react";

import { headerInfoName } from "../../utils/data";
import { timeApi } from "../../apis/api";

import headerAvatar from "../../assets/images/header-avatar.jpg";

import "./Header.css";

function Header() {
  //#region ------ variable declaration ------
  const [timeInfo, setTimeInfo] = useState({});
  //#endregion

  //#region ------ lifecycle ------
  // api call to get time
  useEffect(() => {
    fetch(timeApi)
      .then((res) => res.json())
      .then((data) => setTimeInfo(data));
    //eslint-disable-next-line
  }, []);
  //#endregion

  return (
    <header className="header">
      <div className="headerInfo">
        {/* avatar */}
        <img
          className="headerInfoAvatar"
          src={headerAvatar}
          alt="headerAvatar"
        />
        {/* header name */}
        <p className="headerInfoName">{headerInfoName}</p>
        {/* timezone display */}
        <p className="headerInfoTime">
          {Object.keys(timeInfo).length
            ? timeInfo["timezone"] +
              ", " +
              new Date(timeInfo["datetime"]).toLocaleString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })
            : ""}
        </p>
      </div>
    </header>
  );
}

export default Header;
