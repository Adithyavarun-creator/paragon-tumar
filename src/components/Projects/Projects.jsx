import React, { useEffect } from "react";
import "./Projects.css";
import { mainProjectList } from "../../datas/projectList";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="projectContainer" data-aos="fade-down">
        <div className="projectTitleBox">
          <Title whiteStrokeTitle="Projects" />
        </div>

        <div className="projectCardbox">
          {mainProjectList.map((project) => (
            <Link
              to={`/project/${project.slug}`}
              className="projectCard navigationLinks"
              key={project.id}
              data-aos="fade-up"
            >
              <div>
                <img className="projectImage" src={project.qrImage} />
              </div>
              <div className="projectContent">
                <div>
                  <span className="projectHeading">{project.title}</span>
                </div>
                <div className="projectDetails">
                  <span className="projectCategory">{project.category}</span>
                  <span className="projectYear">{project.year}</span>
                </div>
                <div className="boxing"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
