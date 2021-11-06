import React from "react";
import frontArImg from "../img/frontAr.png";
function Projects() {
  return (
    <section class="worksSection" id="works">
      <div class="sectionHead">
        <span>TAKE A LOOK AT MY</span>
        <h2>PROYECTOS</h2>
      </div>

      <div class="worksContainer sectionContainer">
        <article class="workBox">
          <div class="workImageContainer">
            <img src={frontArImg} alt="frontAr landing page." />
          </div>
          <div class="workDescribeContainer">
            <h3>frontAR</h3>
            <h4>
              Tecnologias usadas: <span class="techStack">HTML</span>,
              <span class="techStack">SASS</span>,
              <span class="techStack">JS</span>.
            </h4>
            <div class="workLinks">
              <a
                href="https://alejoaseijas.github.io/Front-Ar/"
                class="liveLink"
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
