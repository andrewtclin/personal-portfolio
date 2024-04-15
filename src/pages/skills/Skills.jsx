import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import { AgGridReact } from "ag-grid-react";

import "./Skills.css";

function Skills({ skills }) {
  //#region configurations of AG-Grid
  const columnDefs = [
    {
      headerName: "Category",
      field: "category",
      flex: 1,
      cellStyle: { fontWeight: 600 },
    },
    {
      headerName: "Skills",
      field: "skills",
      flex: 2,
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
    suppressHorizontalScroll: false,
    domLayout: "autoHeight",
    onGridReady: function (params) {
      if (params.api) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          params.columnApi.setColumnWidth("category", 200);
          params.columnApi.setColumnWidth("skills", 400);
        }
      }
    },
  };
  //#endregion

  return (
    <section id="projects" className="skills">
      <PageTitle title="Skills" description="My Abilities" />
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
