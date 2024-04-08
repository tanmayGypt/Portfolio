import React from "react";
import Project_Card from "./Project_Card";
function Project_Section() {
  return (
    <div className="mt-64">
      <h1 className="text-white text-center tracking-wide font-semibold text-5xl mt-8 mb-4">
        My Projects
      </h1>
      <Project_Card />
    </div>
  );
}

export default Project_Section;
