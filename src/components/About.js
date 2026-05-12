import React, { Fragment } from "react";
import Project1 from "../imgs/P1.png";
import Project2 from "../imgs/P2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faNpm,
  faGit,
  faGithub,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Html } from "../imgs/svgs/html-5.svg";
import { ReactComponent as Css } from "../imgs/svgs/css-3.svg";
import { ReactComponent as Js } from "../imgs/svgs/js.svg";
import { ReactComponent as Reactjs } from "../imgs/svgs/react.svg";
import { ReactComponent as Node } from "../imgs/svgs/node-js.svg";
import { ReactComponent as Github } from "../imgs/svgs/github.svg";
import { ReactComponent as Figma } from "../imgs/svgs/figma.svg";
import { ReactComponent as Npm } from "../imgs/svgs/npm.svg";
import { ReactComponent as Photoshop } from "../imgs/svgs/photoshop.svg";
import { ReactComponent as Firebase } from "../imgs/svgs/firebase.svg";
import { ReactComponent as Git } from "../imgs/svgs/git.svg";
import { ReactComponent as Tailwind } from "../imgs/svgs/tailwind.svg";

function About() {
  return (
    <Fragment>
      <div className="about" id="about">
        <div className="left-col col">
          <div className="bio">
            <p>
              I'm a 20-year-old developer on a mission to build a better web.
              Combining a fresh perspective with a rigorous self-taught
              background, I specialize in turning complex problems into
              intuitive front-end solutions. I’m looking for my next
              challenge—where I can prove my value and elevate the user
              experience.
            </p>
            <div className="cards">
              <a
                target="_blank"
                href="https://github.com/Mohamed-Alkfrawy"
                className="card"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohamed-alkfrawy"
                className="card"
              >
                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
              </a>
            </div>
          </div>
          <h2>ABOUT</h2>
        </div>
        <div className="right-col col">
          <h2 style={{ rotate: "90deg" }}>Skills</h2>
          <div className="icons">
            <Html />
            <Css />
            <Js />
            <Reactjs />
            <Node />
            <Npm />
            <Git />
            <Github />
            <Tailwind />
            <Figma />
            <Firebase />
            <Photoshop />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default About;
