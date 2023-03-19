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
            {/* {whatWeDo.map((project) => ( */}
            <div className="aboutContents">
              <div className="aboutContentNames">
                <span className="aboutContentnumber">01</span>
                <span className="aboutContenttitle">Download the App</span>
              </div>
              <div className="aboutContentNames">
                <span className="spacebar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="aboutContentdesc">
                  To own and interact with the SQRS you only need a Wallet app
                  with a Browser. For this we recommend downloading Meta Mask.
                  The QR Codes contained in SQRS are Deep Links for Meta Mask –
                  so you can buy, sell, see the SQRS just by scanning the SQRS
                  QR Code
                </span>

                <div>
                  <a href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202">
                    Link
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&gl=US&pli=1">
                    Link
                  </a>
                </div>
              </div>

              <div className="border-top" />
            </div>
            {/* ))} */}

            <div className="aboutContents">
              <div className="aboutContentNames">
                <span className="aboutContentnumber">02</span>
                <span className="aboutContenttitle">Own Currency</span>
              </div>
              <div className="aboutContentNames">
                <span className="spacebar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="aboutContentdesc">
                  To buy a SQRS you need Blockchain Based Currency – Crypto
                  currencies. SQRS is using 4 different currencies, free for the
                  owner to choose from for the pricing. Most common is USDC – a
                  US Dollar Derivate. For high secure transactions we recommend
                  our own crypto currency – ARES – Asset Related Electronic
                  Securities.
                </span>
              </div>
              <div className="border-top" />
            </div>

            <div className="aboutContents">
              <div className="aboutContentNames">
                <span className="aboutContentnumber">03</span>
                <span className="aboutContenttitle">Scan & Buy</span>
              </div>
              <div className="aboutContentNames">
                <span className="spacebar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="aboutContentdesc">
                  By scanning the QR code with your smartphone you get direct
                  linked to the buying website of the SQRS in our App. By
                  one-click-buy you become owner of this SQRS and so of the real
                  asset. With the SQRS you are every time, without any third
                  parties, able to collect your physical asset. Or trade it at
                  any time again on the blockchain.
                </span>
              </div>
              <div className="border-top" />
            </div>
          </div>
        </div>

        {/* Work Process */}
        {/* <div className="aboutContent">
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
        </div> */}

        {/* Our Skills */}
        {/* <div className="aboutContent">
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
        </div> */}
      </div>
    </>
  );
};

export default AboutUs;
