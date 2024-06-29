import React from "react";
import Project_Card from "./Project_Card";
import Project_card2 from "./Project_card2";
function Project_Section() {
  return (
    <div className="mt-64 bg-black">
      <h1 className="text-white text-center tracking-wide font-semibold text-5xl mt-8 mb-12">
        My Projects
        <hr className="w-36 mt-4 mx-auto border-red-600" />
      </h1>
      <div className="flex flex-col gap-y-5">
        <Project_Card />
        <Project_card2 />
      </div>
    </div>
  );
}

export default Project_Section;
