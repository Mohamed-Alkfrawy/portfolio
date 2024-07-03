import React, { Fragment } from "react";
import Project1 from '../imgs/P1.png'
import Project2 from '../imgs/P2.png'

function About (){
    return(
        <Fragment >
                <div className="about-text-box">
                    <h3>Welcome Again !</h3>
                    <h1>I'm Mohamed And ... :</h1>
                    <p>
                        I'm a junior front-end web developer, 18 years old searching for 
                        an opportunity to prove my self in this large field.
                     </p>
                </div>
                <div className="skills">
                    <div className="left-col">
                    <h3>And Here's</h3>
                    <h1>My Skills :</h1>
                    <ul>
                        <li><span>Html</span></li>
                        <li><span>Css3</span></li>
                        <li><span>Vanilla js</span></li>
                        <li><span>React js</span></li>
                        <li><span>SupaBase</span></li>
                        <li><span>Node</span></li>
                        <li><span>GIt</span></li>
                        <li><span>Github</span></li>
                        <li><span>Photoshop</span></li>
                    </ul>
                    </div>
                <div className="right-col">
                <h3>And Here's</h3>
                <h1>Some Projects :</h1>
                    <div className="projects">
                        <a target='_blank' href="https://mohamed-alkfrawy.github.io/happy-meal/" rel="noreferrer"><img src={Project1} alt="Not found"></img></a>
                        <a target='_blank' href="https://mohamed-alkfrawy.github.io/Tale-Project/" rel="noreferrer"><img src={Project2} alt="Not found"></img></a>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}
export default About
