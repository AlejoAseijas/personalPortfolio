import React from "react";

function AboutMe() {
  return (
    <section className="aboutSection" id="about">
      <div className="sectionHead">
        <span>SOME INFO</span>
        <h2>ABOUT ME</h2>
      </div>

      <article className="aboutContainer sectionContainer">
        <p>
          Soy un desarrollador web front-end. Soy un apasionado de{" "}
          <span>codear</span> y la resolución de problemas a través del código.
        </p>
      </article>
    </section>
  );
}

export default AboutMe;
