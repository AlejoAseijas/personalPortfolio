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
          <a
            className="resumeLink"
            href="assets/Alex-Calia-Resume.pdf"
            alt="Alex Calia's resumé"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumé
          </a>
          <ul className="socialsList">
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-calia-33190337/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="lni lni-linkedin-original"
                  aria-label="Link to Alex's LinkedIn page."
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/alexcalia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="lni lni-github-original"
                  aria-label="Link to Alex's GitHub page."
                ></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/AlexanderCalia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="lni lni-twitter-original"
                  aria-label="Link to Alex's Twitter profile."
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
