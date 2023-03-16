import React, { Fragment } from "react";
import "./AboutUs.css";
import { whatWeDo } from "../../datas/whatWeDo";
import { workProcess } from "../../datas/workProcess";
import { ourSkills } from "../../datas/ourSkills";

const AboutUs = () => {
  return (
    <>
      <div className="aboutContainer">
        {/* Who We Are */}
        <div className="aboutContent">
          <div className="aboutWhat">
            <span>Who We Are</span>
          </div>
          <div className="aboutWhatDoing">
            <div>
              <span className="aboutWhatContent">
                Cloud bread cardigan messenger bag raw denim swag drinking
                vinegar. Pok pok authentic fashion axe, vegan venmo leggings
                raclette tousled twee tattooed. Banh mi humblebrag hammock tacos
                fashion axe aesthetic vegan sustainable taiyaki thundercats jean
                shorts tousled cloud bread waistcoat kogi. Banh mi humblebrag
                hammock tacos fashion axe aesthetic vegan sustainable taiyaki
                thundercats jean shorts tousled cloud bread waistcoat kogi.
                Cloud bread cardigan messenger bag raw denim swag drinking
                vinegar. Pok pok authentic fashion axe, vegan venmo leggings
                raclette tousled twee tattooed.
              </span>
            </div>
            <div className="aboutOpt">
              <div className="aboutOptions">
                <div>
                  <span>Strategy</span>
                </div>
                <div className="aboutOptionList">
                  <li>Digital Strategy</li>
                  <li>Content Strategy</li>
                  <li>Responsive developement</li>
                  <li>Web Design</li>
                  <li>Motion Design </li>
                  <li>Data Analysis</li>
                  <li>Brand Experience</li>
                </div>
              </div>

              <div className="aboutOptions">
                <div>
                  <span>Development</span>
                </div>
                <div className="aboutOptionList">
                  <li>Digital Strategy</li>
                  <li>Content Strategy</li>
                  <li>Responsive developement</li>
                  <li>Web Design</li>
                  <li>Motion Design </li>
                  <li>Data Analysis</li>
                  <li>Brand Experience</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="aboutContent">
          <div className="aboutWhat">
            <span>What We Do</span>
          </div>
          <div className="aboutWhatWeDoContent">
            {whatWeDo.map((project) => (
              <div className="aboutContents" key={project.id}>
                <div className="aboutContentNames">
                  <span>0{project.id}</span>
                  <span>{project.title}</span>
                </div>
                <div className="aboutContentNames">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span style={{ textAlign: "justify" }}>
                    {project.description}
                  </span>
                </div>
                <div className="border-top" />
              </div>
            ))}
          </div>
        </div>

        {/* Work Process */}
        <div className="aboutContent">
          <div className="aboutWhat">
            <span>Work Process</span>
          </div>
          <div className="workProcessContents">
            {workProcess.map((work) => (
              <div className="workProcessContentBox" key={work.id}>
                <div>
                  <span>0{work.id}</span>
                </div>
                <div>
                  <span>{work.title}</span>
                </div>
                <div>
                  <span style={{ fontSize: "14px" }}>{work.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Skills */}
        <div className="aboutContent">
          <div className="aboutWhat">
            <span>Our Skills</span>
          </div>
          <div className="ourSkillContents">
            {ourSkills.map((skill) => (
              <Fragment key={skill.id}>
                <div className="border-top" />
                <div className="ourskillContent">
                  <div>
                    <span>{skill.count}</span>
                  </div>
                  <div>
                    <span>{skill.name}</span>
                  </div>
                  <div className="skillList">
                    {skill.list.map((list, i) => (
                      <div key={i}>
                        <li>{list}</li>
                      </div>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
            <div className="border-bottom" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
