import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <div>
          <video
            className="contactofficevideo"
            src="https://player.vimeo.com/external/373860531.sd.mp4?s=e7cc669c0e3ae350a6e23836f609af844b7b53c0&profile_id=164&oauth2_token_id=57447761"
            loop
            muted
            autoPlay
          />
        </div>

        <div className="contactvideoTextbox">
          <div>
            <span className="contactvideoText">THE BEST</span>
          </div>
          <div>
            <span className="contactvideoText">AGENCY FOR </span>
          </div>
          <div>
            <span className="contactvideoText">YOUR BUSINNES</span>
          </div>
        </div>

        <div className="contactDetailsBox">
          <div className="contactImageBox">
            <img
              src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
              className="contactImage"
              alt="contact"
            />
          </div>
          <div className="contactDetailBox">
            <div>
              <h2 className="contactDetailBoxtext">Contact Us</h2>
            </div>
            <div className="border-top"></div>

            <div className="contactBoxes">
              {/* Box 1 */}
              <div className="contactBox">
                <div>
                  <span className="contactBoxheading">General Contact</span>
                </div>
                <div className="contactBoxlinks">
                  <div>
                    <span className="contactBoxheadingsubs">
                      +23 8 8532 7834
                    </span>
                  </div>
                  <div>
                    <span className="contactBoxheadingsubs">
                      9.00 — 18.00, Mon to Fri
                    </span>
                  </div>
                  <div>
                    <span className="contactBoxheadingsubs">
                      email@tumar_agency.com
                    </span>
                  </div>
                </div>
              </div>
              {/* Box 2 */}
              <div className="contactBox">
                <div>
                  <span className="contactBoxheading">Press</span>
                </div>
                <div className="contactBoxlinks">
                  <div>
                    <span className="contactBoxheadingsubs">
                      +23 8 8532 7834
                    </span>
                  </div>
                  <div>
                    <span className="contactBoxheadingsubs">
                      9.00 — 18.00, Mon to Fri
                    </span>
                  </div>
                  <div>
                    <span className="contactBoxheadingsubs">
                      press@sqares.com
                    </span>
                  </div>
                </div>
              </div>
              {/* Box 3 */}
              <div className="contactBox">
                <div>
                  <span className="contactBoxheading">Address</span>
                </div>
                <div className="contactBoxlinks">
                  <div>
                    <span className="contactBoxheadingsubs">
                      PO Box 223158 Oliver Street
                    </span>
                  </div>
                  <div>
                    <span className="contactBoxheadingsubs">
                      East Victoria 2006 UK
                    </span>
                  </div>
                  <div>
                    <span className="contactBoxheadingsubs">
                      open in google maps
                    </span>
                  </div>
                </div>
              </div>
              {/* Box 4 */}
              <div className="contactBox">
                <div>
                  <span className="contactBoxheadingsubs">
                    Investors Relations
                  </span>
                </div>
                <div className="contactBoxlinks">
                  <div>
                    <span className="contactBoxheadingsubs">IR@sqares.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
