/* eslint-disable jsx-a11y/alt-text */
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
              <img src={htmlImg} />
              <p>HTML</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={cssImg} />
              <p>CSS</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={sassImg} />
              <p>SASS</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={javascriptImg} />
              <p>Javascript</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={jqueryImg} />
              <p>JQuery</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={reactImg} />
              <p>React</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={apiImg} />
              <p>REST API</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={gitImg} />
              <p>Git</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={firebaseImg} />
              <p>Firebase</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src={vscodeImg} />
              <p>VS Code</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
