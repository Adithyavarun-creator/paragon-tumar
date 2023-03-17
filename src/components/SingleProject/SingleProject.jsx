import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProject.css";
import { projectList } from "../../datas/projectList";
import Modal from "../Modal/Modal";

const SingleProject = () => {
  const { slug } = useParams();

  const [project, setProject] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const myProject = projectList.find((p) => p.slug === slug);
    if (myProject) {
      setProject(myProject);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  //console.log(project);

  //console.log(file);
  //console.log(project?.imagesArray?.[0].image);

  return (
    <>
      <div className="singleProjectContainer">
        <div>
          <img
            src={project?.coverImage ? project?.coverImage : ""}
            className="singleProjectcover"
          />
        </div>

        <div>
          <div className="singleProjectimageText">
            <span className="singleProjecttitle">{project?.title}</span>
            <span className="singleProjectcategory">{project?.category}</span>
          </div>
        </div>

        <div className="singleProjectContent">
          <div className="border-top" />

          <div className="singleProjectInfobox">
            <div className="singleProjectInfo">
              <span>Project Info</span>
            </div>
            <div className="singleProjectArticlebox">
              <article>{project?.info}</article>
            </div>
          </div>
          <div className="singleProjectAcheives">
            <div className="no-disc">
              <div>
                <span>Platforms</span>
              </div>
              {project?.platforms?.map((list, i) => (
                <div key={i}>
                  <li>{list}</li>
                </div>
              ))}
            </div>
            <div className="no-disc">
              <div>
                <span>Awards</span>
              </div>
              {project?.awards?.map((list, i) => (
                <div key={i}>
                  <li>{list}</li>
                </div>
              ))}
            </div>
            <div className="no-disc">
              <div>
                <span>Roles</span>
              </div>
              {project?.role?.map((list, i) => (
                <div key={i}>
                  <li>{list}</li>
                </div>
              ))}
            </div>
          </div>
          <div className="border-bottom"></div>

          <div className="singleProjectInfobox">
            <div className="singleProjectInfo">
              <span>IPhone kombucha shaman gastropub</span>
            </div>
            <div className="singleProjectArticlebox">
              <article>
                IPhone kombucha shaman gastropub snackwave 90's lo-fi pug
                chillwave pok pok tofu. Swag deep v listicle roof party seitan
                man braid raclette church-key trust fund locavore vexillologist
                green juice raw denim tilde meh. Austin thundercats locavore
                taiyaki snackwave hoodie put a bird on it tattooed selvage
                kitsch ramps. Godard slow-carb chartreuse occupy, tumblr
                letterpress pok pok tattooed yr lyft yuccie kinfolk.
              </article>
            </div>
          </div>
        </div>

        {project?.imagesArray?.map((image, i) => (
          <div key={i}>
            <img
              onClick={() => setFile(image)}
              className={file ? "bg-light" : "singleProjectImages"}
              src={image.image}
            />
          </div>
        ))}

        {file && <Modal file={file} setFile={setFile} src={file?.image} />}

        <div className="singleProjectContent">
          <div className="singleProjectInfobox">
            <div className="singleProjectInfo">
              <span>IPhone humblebrag kale chips</span>
            </div>
            <div className="singleProjectArticlebox">
              <article>
                Brooklyn whatever chia deep v slow-carb lomo put a bird on.
                Austin fam chia cold-pressed raw denim. Retro jean shorts cronut
                lumbersexual mixtape hella you probably haven't heard of them
                austin williamsburg af mustache pinterest. Mixtape kinfolk cray,
                wolf palo santo brunch iPhone. 3 wolf moon microdosing
                scenester, tilde roof party affogato typewriter celiac echo park
                craft beer bicycle rights man braid trust fund four dollar toast
                gentrify. IPhone humblebrag kale chips hell of.
              </article>
            </div>
          </div>
        </div>

        <div className="singleProjectContent">
          <div className="singleProjectInfobox">
            <div className="singleProjectInfo">
              <span>Austin fam chia cold-pressed raw</span>
            </div>
            <div className="singleProjectArticlebox">
              <article>
                3 wolf moon microdosing scenester, tilde roof party affogato
                typewriter celiac echo park craft beer bicycle rights man braid
                trust fund four dollar toast gentrify. Mixtape kinfolk cray,
                wolf palo santo brunch iPhone. Retro jean shorts cronut
                lumbersexual mixtape hella you probably haven't heard of them
                austin williamsburg af mustache pinterest. IPhone humblebrag
                kale chips hell of. Brooklyn whatever chia deep v slow-carb lomo
                put a bird on. Austin fam chia cold-pressed raw denim.
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
