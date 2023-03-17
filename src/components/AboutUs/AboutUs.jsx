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
            <span className="aboutWhatheadingtext">Who We Are</span>
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
                  <span className="aboutOptionsHeading">Strategy</span>
                </div>
                <div className="aboutOptionLists">
                  <li className="aboutOptionList">Digital Strategy</li>
                  <li className="aboutOptionList">Content Strategy</li>
                  <li className="aboutOptionList">Responsive developement</li>
                  <li className="aboutOptionList">Web Design</li>
                  <li className="aboutOptionList">Motion Design </li>
                  <li className="aboutOptionList">Data Analysis</li>
                  <li className="aboutOptionList">Brand Experience</li>
                </div>
              </div>

              <div className="aboutOptions">
                <div>
                  <span className="aboutOptionsHeading">Development</span>
                </div>
                <div className="aboutOptionList">
                  <li className="aboutOptionList">Digital Strategy</li>
                  <li className="aboutOptionList">Content Strategy</li>
                  <li className="aboutOptionList">Responsive developement</li>
                  <li className="aboutOptionList">Web Design</li>
                  <li className="aboutOptionList">Motion Design </li>
                  <li className="aboutOptionList">Data Analysis</li>
                  <li className="aboutOptionList">Brand Experience</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="aboutContent">
          <div className="aboutWhat">
            <span className="aboutWhatheadingtext">What We Do</span>
          </div>
          <div className="aboutWhatWeDoContent">
            {whatWeDo.map((project) => (
              <div className="aboutContents" key={project.id}>
                <div className="aboutContentNames">
                  <span className="aboutContentnumber">0{project.id}</span>
                  <span className="aboutContenttitle">{project.title}</span>
                </div>
                <div className="aboutContentNames">
                  <span className="spacebar">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="aboutContentdesc">
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
            <span className="aboutWhatheadingtext">Work Process</span>
          </div>
          <div className="workProcessContents">
            {workProcess.map((work) => (
              <div className="workProcessContentBox" key={work.id}>
                <div>
                  <span className="workProcessContentnumber">0{work.id}</span>
                </div>
                <div>
                  <span className="workProcessContenttitle">{work.title}</span>
                </div>
                <div>
                  <span className="workProcessContentdesc">
                    {work.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Skills */}
        <div className="aboutContent">
          <div className="aboutWhat">
            <span className="aboutWhatheadingtext">Our Skills</span>
          </div>
          <div className="ourSkillContents">
            {ourSkills.map((skill) => (
              <Fragment key={skill.id}>
                <div className="border-top" />
                <div className="ourskillContent">
                  <div>
                    <span className="ourskillContentcount">{skill.count}</span>
                  </div>
                  <div>
                    <span className="ourskillContentname">{skill.name}</span>
                  </div>
                  <div className="skillList">
                    {skill.list.map((list, i) => (
                      <div className="skillContentLists" key={i}>
                        <div>&#9702;</div>
                        <div>
                          <li className="skillContentList">{list}</li>
                        </div>
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
