import React from "react";
import Title from "../Title/Title";
import "./Team.css";

const Team = () => {
  return (
    <>
      <Title title="Our Creative Team" />
      <div className="teamContainer">
        <div className="teamContent">
          <div className="teamImageContent">
            <img
              className="teamImage"
              src="https://images.unsplash.com/photo-1678750267403-42d7ac3e75e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60"
            />
          </div>
          <div className="teamIntro">
            <div className="teamIntroSubsRight">
              <span>Jason Hardeman</span>
              <span>Creative Director</span>
            </div>
            <div>
              <article className="teamIntroDesc">
                Cardigan disrupt fashion axe post-ironic, cold-pressed woke
                hoodie letterpress YOLO schlitz sartorial etsy prism squid
                church-key. Cliche kickstarter yr, twee offal craft beer
                actually live-edge waistcoat cardigan you probably haven't heard
                of them.
              </article>
            </div>
          </div>
        </div>

        <div className="teamContent">
          <div className="teamIntro">
            <div className="teamIntroSubsLeft">
              <span>Amanda Bryan</span>
              <span>Front-end Developer</span>
            </div>
            <div>
              <article className="teamIntroDesc">
                Pinterest lumbersexual forage chillwave godard pitchfork
                vexillologist deep v chia truffaut four dollar toast food truck
                meditation. Hot chicken coloring book cliche YOLO, crucifix kale
                chips swag hexagon raclette paleo next level austin yuccie
                thundercats.
              </article>
            </div>
          </div>
          <div className="teamImageContent">
            <img
              className="teamImage"
              src="https://images.unsplash.com/photo-1678750267403-42d7ac3e75e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60"
            />
          </div>
        </div>

        <div className="teamContent">
          <div className="teamImageContent">
            <img
              className="teamImage"
              src="https://images.unsplash.com/photo-1678750267403-42d7ac3e75e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60"
            />
          </div>
          <div className="teamIntro">
            <div className="teamIntroSubsRight">
              <span>Henry Matthews</span>
              <span>UI/UX Designer</span>
            </div>
            <div>
              <article className="teamIntroDesc">
                Pitchfork green juice meh ethical slow-carb poke authentic
                salvia skateboard helvetica tousled bicycle rights ennui. Hot
                chicken ugh drinking vinegar, edison bulb dreamcatcher meh craft
                beer offal tousled gluten-free locavore. Franzen schlitz
                gochujang.
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
