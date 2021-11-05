import React from "react";

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
              <img src="assets/skills/html.svg" />
              <p>HTML</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/css.svg" />
              <p>CSS</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/sass.svg" />
              <p>SASS</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/javascript.svg" />
              <p>Javascript</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/jquery.svg" />
              <p>JQuery</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/react.svg" />
              <p>React</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img
                src="assets/skills/api.svg"
                alt="Image from https://commons.wikimedia.org/wiki/File:Cloud-API-Logo.svg"
              />
              <p>REST API</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/git.svg" />
              <p>Git</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/firebase.svg" />
              <p>Firebase</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/vscode.svg" />
              <p>VS Code</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/microsoftWindows.svg" />
              <p>Windows</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/microsoft.svg" />
              <p>M365</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/dns.svg" />
              <p>DNS</p>
            </div>
          </li>
          <li>
            <div className="itemContainer">
              <img src="assets/skills/network.svg" />
              <p>Networks</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;