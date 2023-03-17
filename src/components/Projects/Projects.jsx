import React from "react";
import "./Projects.css";
import { projectList } from "../../datas/projectList";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//https://sqares.com/assets/images/allsqrs/qr1.jpg

const Projects = () => {
  return (
    <>
      <div className="projectContainer">
        <div className="projectTitleBox">
          <Title title="Projects" />
        </div>

        <div className="projectCardbox">
          {projectList.map((project) => (
            <Link
              to={`/project/${project.slug}`}
              className="projectCard navigationLinks"
              key={project.id}
            >
              <div>
                <img className="projectImage" src={project.coverImage} />
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

/**
 <div className="projectCard">
            <div>
              <img
                className="projectImage"
                src="https://images.unsplash.com/photo-1678737169917-4e19ce734b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60"
              />
            </div>
            <div className="projectContent">
              <div>
                <span className="projectHeading">Dummy</span>
              </div>
              <div className="projectDetails">
                <span className="projectCategory">Photoshoots</span>
                <span className="projectYear">2030</span>
              </div>
              <div className="boxing"></div>
            </div>
          </div>

          <div className="projectCard">
            <div>
              <img
                className="projectImage"
                src="https://images.unsplash.com/photo-1678737169917-4e19ce734b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60"
              />
            </div>
            <div className="projectContent">
              <div>
                <span className="projectHeading">Dummy</span>
              </div>
              <div className="projectDetails">
                <span className="projectCategory">Photoshoots</span>
                <span className="projectYear">2030</span>
              </div>
              <div className="boxing"></div>
            </div>
          </div>

          <div className="projectCard">
            <div>
              <img
                className="projectImage"
                src="https://images.unsplash.com/photo-1678737169917-4e19ce734b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60"
              />
            </div>
            <div className="projectContent">
              <div>
                <span className="projectHeading">Dummy</span>
              </div>
              <div className="projectDetails">
                <span className="projectCategory">Photoshoots</span>
                <span className="projectYear">2030</span>
              </div>
              <div className="boxing"></div>
            </div>
          </div>
 */
