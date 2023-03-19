import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProject.css";
import { projectList, mainProjectList } from "../../datas/projectList";
import Modal from "../Modal/Modal";
import Marquee from "../Marquee/Marquee";
import { MdLocationOn } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import LocationSVG from "../../assets/svg/location.svg";
import EthereumSVG from "../../assets/svg/ethereum.svg";

const SingleProject = () => {
  const { slug } = useParams();

  const [project, setProject] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const myProject = mainProjectList.find((p) => p.slug === slug);
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
              <span className="singleProjectInfotext">Project Info</span>
            </div>
            <div className="singleProjectArticlebox">
              <article className="singleProjectInfoarticle">
                {project?.info}
              </article>
            </div>
          </div>
          <div className="singleProjectAcheives">
            {/* <div className="no-disc">
              <div>
                <span className="singleProjectAcheiveTitle">
                  The physical Artwork
                </span>
              </div>
              {project?.platforms?.map((list, i) => (
                <div key={i}>
                  <li className="singleProjectAcheiveTitlelist">{list}</li>
                </div>
              ))}
            </div> */}
            <div className="no-disc">
              <div className="flexRow">
                <div>
                  <span className="singleProjectAcheiveTitle">
                    The Storage Location
                  </span>
                </div>
                {/* <div>
                  <MdLocationOn className="projectContentIcon" />
                </div> */}
                <div>
                  <img src={LocationSVG} className="projectContentIcon" />
                </div>
              </div>
              {project?.storage?.map((p, i) => (
                <div key={i} className="projectGridtype">
                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Art Name</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.name}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Country</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.country}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Category</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.category}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Security Level</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.securityLevel}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">SQRS Location</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.sqrsLocation}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Address</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.address}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Website</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.website}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Contact</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.contact}</span>
                    </div>
                  </div>
                </div>
                // <div key={i}>
                //   <li className="singleProjectAcheiveTitlelist">
                //     Name : {p.name}
                //   </li>
                //   <li className="singleProjectAcheiveTitlelist">
                //     Country : {p.country}
                //   </li>
                //   <li className="singleProjectAcheiveTitlelist">
                //     Category : {p.category}
                //   </li>
                //   <li className="singleProjectAcheiveTitlelist">
                //     Security Level : {p.securityLevel}
                //   </li>
                //   <li className="singleProjectAcheiveTitlelist">
                //     SQRS Storage Location : {p.sqrsLocation}
                //   </li>
                //   <li className="singleProjectAcheiveTitlelist">
                //     Address : {p.address}
                //   </li>
                //   <li className="singleProjectAcheiveTitlelist">
                //     Website : {p.website}
                //   </li>
                //   <li className="singleProjectAcheiveTitlelist">
                //     Contact : {p.contact}
                //   </li>
                // </div>
              ))}
            </div>

            <div className="no-disc">
              <div className="flexRow">
                <div>
                  <span className="singleProjectAcheiveTitle">
                    The Ethereum Contract
                  </span>
                </div>
                <div>
                  <img src={EthereumSVG} className="projectContentIcon" />
                </div>
              </div>
              {project?.contractDetails?.map((p, i) => (
                <div key={i} className="projectGridtype">
                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Contract Address</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">
                        {p.contractAddress}
                      </span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Network</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.network}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Description</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.description}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Defintion</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.definition}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">SNFT Functions</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.snft}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Browser</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.browser}</span>
                    </div>
                  </div>

                  <div className="projectGridlist">
                    <div>
                      <span className="projectGridname">Deeplink</span>
                    </div>
                    <div>
                      <span className="" style={{ color: "white" }}>
                        -
                      </span>
                    </div>
                    <div>
                      <span className="projectGriddata">{p.deepLink}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-bottom"></div>

          <div className="singleProjectInfobox">
            <div className="singleProjectInfo">
              <span className="singleProjectInfotitle">
                IPhone kombucha shaman gastropub
              </span>
            </div>
            <div className="singleProjectArticlebox">
              <article className="singleProjectArticle">
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

        {/* {project?.imagesArray?.map((image, i) => (
          <div className="imagesArrayBox" key={i}>
            <img
              onClick={() => setFile(image)}
              className={file ? "bg-light" : "singleProjectImages"}
              src={image.image}
            />
          </div>
        ))} */}

        {file && <Modal file={file} setFile={setFile} src={file?.image} />}

        <div className="singleProjectContent">
          <div className="singleProjectInfobox">
            <div className="singleProjectInfo">
              <span className="singleProjectInfotitle">
                IPhone humblebrag kale chips
              </span>
            </div>
            <div className="singleProjectArticlebox">
              <article className="singleProjectArticle">
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
              <span className="singleProjectInfotitle">
                Austin fam chia cold-pressed raw
              </span>
            </div>
            <div className="singleProjectArticlebox">
              <article className="singleProjectArticle">
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
