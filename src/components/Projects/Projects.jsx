import React from "react";
import "./Projects.css";
import { projectList } from "../../datas/projectList";
import ProjectCard from "../ProjectCard/ProjectCard";
import Title from "../Title/Title";

const Projects = () => {
  return (
    <>
      <div className="projectContainer">
        <div className="projectTitleBox">
          <Title title="Projects" />
        </div>

        <div className="projectCardbox">
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
