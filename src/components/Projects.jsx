import React from "react";
import frontArImg from "../img/frontAr.avif";
import sweetStyle from "../img/sweet-style.avif";
import saludAvanzada from "../img/saludAvanzada.avif";
function Projects() {
  return (
    <section className="worksSection" id="works">
      <div className="sectionHead">
        <span>TAKE A LOOK AT MY</span>
        <h2>PROYECTOS</h2>
      </div>

      <div className="worksContainer sectionContainer">
        <article className="workBox">
          <div className="workImageContainer">
            <img src={frontArImg} alt="frontAr landing page." />
          </div>
          <div className="workDescribeContainer">
            <h3>frontAR</h3>
            <h4>
              Tecnologias usadas: <span className="techStack">HTML</span>,
              <span className="techStack">SASS</span>,
              <span className="techStack">JS</span>.
            </h4>
            <div className="workLinks">
              <a
                href="https://alejoaseijas.github.io/Front-Ar/"
                className="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </article>

        <article className="workBox">
          <div className="workImageContainer">
            <img src={sweetStyle} alt="sweet-style front ecommerce." />
          </div>
          <div className="workDescribeContainer">
            <h3>Sweet-Style</h3>
            <h4>
              Tecnologias usadas: <span className="techStack">HTML</span>,
              <span className="techStack">SASS</span>,
              <span className="techStack">JS</span>.
            </h4>
            <div className="workLinks">
              <a
                href="https://sweetstyleshop.000webhostapp.com/index.html"
                className="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </article>

        <article className="workBox">
          <div className="workImageContainer">
            <img src={saludAvanzada} alt="sweet-style front ecommerce." />
          </div>
          <div className="workDescribeContainer">
            <h3>Salud Avanzada</h3>
            <h4>
              <span className="techStack">REACT</span>,
              <span className="techStack">SASS</span>.
              <span className="techStack">JS</span>.
            </h4>
            <div className="workLinks">
              <a
                href="https://saludavanzada.com.ar/"
                className="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
