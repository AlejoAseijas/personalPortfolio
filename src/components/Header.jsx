import React from "react";
import perfilImg from "../img/me.png";
function Header() {
  return (
    <header>
      <div className="heroImageContainer">
        <img src={perfilImg} alt="Alejo Aseijas" />
      </div>
      <div className="heroDescription">
        <p className="greeting">Hola! Soy</p>
        <h1>
          <span>Alejo</span> Aseijas
        </h1>
        <p className="smallBio">
          Un <span>Front-End Web Developer</span> apasionado por la creación de
          aplicaciones y experiencias interactivas en la web.
        </p>
        <div className="socialsResume">
          <ul className="socialsList">
            <li>
              <a
                href="https://www.linkedin.com/in/alejoaseijas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="lni lni-linkedin-original"
                  aria-label="Link to AlejoAseijas's LinkedIn page."
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AlejoAseijas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="lni lni-github-original"
                  aria-label="Link to AlejoAseijas's GitHub page."
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
