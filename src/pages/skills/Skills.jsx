import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { AgGridReact } from "ag-grid-react";

import "./Skills.css";

function Skills({ skills }) {
  //#region ------ configurations ------
  //#region ag-grid
  const columnDefs = [
    {
      headerName: "Category",
      field: "category",
      width: 150,
      cellStyle: { fontWeight: 600 },
    },
    {
      headerName: "Skills",
      field: "skills",
      width: 800,
      cellRenderer: formatSkills,
    },
  ];

  function formatSkills(params) {
    const skills = params.value;
    const separator = <span style={{ fontWeight: "bold" }}>　|　</span>;
    return skills.reduce((acc, skill, index) => {
      acc.push(skill);
      if (index < skills.length - 1) {
        acc.push(separator);
      }
      return acc;
    }, []);
  }

  const gridOptions = {
    domLayout: "autoHeight",
    rowHeight: 50,
  };
  //#endregion
  //#endregion

  return (
    <section id="projects" className="skills">
      <PageTitle title="Skills" description="My Abilities" />
      {/* Skills Display */}
      <div className="skillsGrid ag-theme-quartz">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={skills}
          gridOptions={gridOptions}
        />
      </div>
    </section>
  );
}

export default Skills;
