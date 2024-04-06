import React, { useEffect, useState } from "react";

import { educationInfo } from "../../utils/data";

import { AgGridReact } from "ag-grid-react";

import "./Education.css";

function Education() {
  const [tableCols, setTableCols] = useState([]);

  useEffect(() => {
    let tempTableCols = [];
    Object.keys(educationInfo[0]).forEach((key) => {
      tempTableCols.push({ field: key });
    });

    setTableCols(tempTableCols);
  }, []);

  return (
    <section id="education" className="education">
      <div className="educationTitle">
        <p className="educationTitleSub">My background</p>
        <p className="educationTitleMain">Education</p>
      </div>
      <div className="educationGrid">
        <AgGridReact columnDefs={tableCols} rowData={educationInfo} />
      </div>
    </section>
  );
}

export default Education;
