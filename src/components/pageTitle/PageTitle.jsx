import React from "react";

import "./PageTitle.css";

function PageTitle({ title, description }) {
  return (
    <div className="pageTitle">
      <p className="pageTitleSub">{description}</p>
      <p className="pageTitleMain">{title}</p>
    </div>
  );
}

export default PageTitle;
