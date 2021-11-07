import React from "react";
import apiImg from "../img/skills/api.svg";
import cssImg from "../img/skills/css.svg";
import firebaseImg from "../img/skills/firebase.svg";
import gitImg from "../img/skills/git.svg";
import htmlImg from "../img/skills/html.svg";
import javascriptImg from "../img/skills/html.svg";
import jqueryImg from "../img/skills/jquery.svg";
import reactImg from "../img/skills/react.svg";
import sassImg from "../img/skills/sass.svg";
import vscodeImg from "../img/skills/vscode.svg";

function Skills() {
  return (
    <section className="skillsSection" id="skills">
      <div className="sectionHead">
        <span>CHECK OUT MY</span>
        <h2>SKILLS</h2>
      </div>

      <div className="skillsContainer sectionContainer">
        <ul className="skillsGrid">
          <li>
            <div className="itemContainer">
              <img src={htmlImg} alt="htmlPhoto" />
              <p>HTML</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={cssImg} alt="cssPhoto" />
              <p>CSS</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={sassImg} alt="sassPhoto" />
              <p>SASS</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={javascriptImg} alt="jsPhoto" />
              <p>Javascript</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={jqueryImg} alt="jqueryPhoto" />
              <p>JQuery</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={reactImg} alt="reactPhoto" />
              <p>React</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={apiImg} alt="apiPhoto" />
              <p>REST API</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={gitImg} alt="gitPhoto" />
              <p>Git</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={firebaseImg} alt="firebasePhoto" />
              <p>Firebase</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={vscodeImg} alt="vscodePhoto" />
              <p>VS Code</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
