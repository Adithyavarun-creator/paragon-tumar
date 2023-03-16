import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { id, category, title, year, coverImage, slug } = project;
  return (
    <>
      <Link className="navigationLinks" to={`/project/${slug}`} key={id}>
        <div className="projectCard">
          <div>
            <img className="projectImage" src={coverImage} />
          </div>
          <div className="projectContent">
            <div>
              <span className="projectHeading">{title}</span>
            </div>
            <div className="projectDetails">
              <span className="projectCategory">{category}</span>
              <span className="projectYear">{year}</span>
            </div>
            <div className="boxing"></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
