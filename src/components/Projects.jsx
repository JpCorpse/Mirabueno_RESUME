/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ProjectItem from "./ProjectItem";
import p1Img from "../assets/p1.jpg";
import p2Img from "../assets/p2.jpg";
import p3Img from "../assets/p3.jpg";
import p4Img from "../assets/p4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
      <p className="text-center py-8">
        NODE MCU project is a Powered Ball Hockey multiplayer board game. This
        project was inspired to that famous game called "Hockey".
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={p1Img} title="Detailing" />
        <ProjectItem img={p2Img} title="Presentation and Defense" />
        <ProjectItem img={p3Img} title="Testing" />
        <ProjectItem img={p4Img} title="Building" />
      </div>
    </div>
  );
};

export default Projects;
