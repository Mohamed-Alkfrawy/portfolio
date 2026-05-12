import React from "react";
import p1 from "../imgs/P1.png";
import p2 from "../imgs/P2.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>PROJECTS</h2>
      <div className="cards">
        <div className="project">
          <img src={p1} alt="image" />
          <h3>Restaurant Menu</h3>
          <p>
            simple animated non-responsive ui for restaurant menu with four
            special dishs
          </p>
          <div className="spans">
            <span>Html</span>
            <span>Css</span>
            <span>figma</span>
          </div>
          <a href="" target="_blank">
            Preview
          </a>
        </div>
        <div className="project">
          <img src={p2} />
          <h3>Tale Marketing</h3>
          <p>Powerful clean responsive ui&ux for tale marketing service </p>
          <div className="spans">
            <span>Html</span>
            <span>Css</span>
            <span>Js</span>
            <span>Tailwind</span>
            <span>figma</span>
          </div>
          <a href="">Preview</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
