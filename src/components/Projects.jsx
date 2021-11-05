import React from "react";

function Projects() {
  return (
    <section class="worksSection" id="works">
      <div class="sectionHead">
        <span>TAKE A LOOK AT MY</span>
        <h2>PROJECTS</h2>
      </div>

      <div class="worksContainer sectionContainer">
        <article class="workBox">
          <div class="workImageContainer">
            <img src="assets/images/stonks.PNG" alt="Stonk." />
          </div>
          <div class="workDescribeContainer">
            <h3>Stonk Market</h3>
            <h4>
              Technologies Used: <span class="techStack">React</span>,{" "}
              <span class="techStack">REST API</span>,{" "}
              <span class="techStack">ChartJS</span>
            </h4>
            <ul>
              <li>Completely built with hooks and functional components</li>
              <li>
                Emulates time passage, and stock prices update randomly as each
                "day" passes
              </li>
              <li>
                Real-time updates on stock and portfolio performance, visualized
                with interactive charts
              </li>
            </ul>
            <div class="workLinks">
              <a
                href="https://alexcalia.com/stonks"
                class="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/alexcalia/stonks"
                class="repoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </article>

        <article class="workBox">
          <div class="workImageContainer">
            <img
              src="assets/images/podcastprioritizer.PNG"
              alt="Podcast Prioritizer landing page."
            />
          </div>
          <div class="workDescribeContainer">
            <h3>Podcast Prioritizer</h3>
            <h4>
              Technologies Used: <span class="techStack">React</span>,{" "}
              <span class="techStack">REST API</span>,{" "}
              <span class="techStack">Firebase</span>,{" "}
              <span class="techStack">Google Authentication</span>
            </h4>
            <ul>
              <li>
                Uses the MapQuest and ListenNotes API to get route times and
                filter podcast search results based on travel time
              </li>
              <li>
                Google Authenitcation service allows users to sign in and save
                podcasts to a list, stored in Firebase
              </li>
            </ul>
            <div class="workLinks">
              <a
                href="https://alexcalia.com/podcastprioritizer"
                class="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/alexcalia/podcastprioritizer"
                class="repoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </article>

        <article class="workBox">
          <div class="workImageContainer">
            <img
              src="assets/images/cohort.PNG"
              alt="COHORT app's Collaborate page."
            />
          </div>
          <div class="workDescribeContainer">
            <h3>COHORT</h3>
            <h4>
              Technologies Used: <span class="techStack">React</span>,{" "}
              <span class="techStack">React Router</span>,{" "}
              <span class="techStack">Firebase</span>,{" "}
              <span class="techStack">REST API</span>
            </h4>
            <ul>
              <li>
                React Router was used to create multiple views for the chat and
                quotes systems
              </li>
              <li>
                Real-time chat where users can change their username, with all
                messages stored in Firebase
              </li>
              <li>
                Pulls a random quote from an API where users can write an
                anonymous reflection for others to see, all stored in Firebase
              </li>
            </ul>
            <div class="workLinks">
              <a
                href="https://alexcalia.com/cohort"
                class="liveLink"
                target="_blank"
              >
                Live
              </a>
              <a
                href="https://github.com/alexcalia/cohortApp"
                class="repoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                href="https://www.loom.com/share/f615f75be23b40639d3cf74b163c71bc"
                class="demoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        </article>

        <article class="workBox">
          <div class="workImageContainer">
            <img
              src="assets/images/gamescope.PNG"
              alt="Game Scope landing page."
            />
          </div>
          <div class="workDescribeContainer">
            <h3>Game Scope</h3>
            <h4>
              Technologies Used: <span class="techStack">JQuery</span>,{" "}
              <span class="techStack">REST API</span>,{" "}
              <span class="techStack">SASS</span>
            </h4>
            <ul>
              <li>Information on games pulled from a video game API</li>
              <li>
                Games can be filtered by genre using a drop down menu, where the
                endpoint is updated dynamically
              </li>
              <li>
                Using pagination, more games from the genres can be pulled as
                users request them
              </li>
            </ul>
            <div class="workLinks">
              <a
                href="https://alexcalia.com/gamescope"
                class="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/alexcalia/gamescope"
                class="repoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </article>

        <article class="workBox">
          <div class="workImageContainer">
            <img
              src="assets/images/slangapp.PNG"
              alt="Twitter Slang Generator page with results diplsayed."
            />
          </div>
          <div class="workDescribeContainer">
            <h3>Twitter Slang Generator</h3>
            <h4>
              Technologies Used: <span class="techStack">JQuery</span>,{" "}
              <span class="techStack">SASS</span>
            </h4>
            <ul>
              <li>
                Users click an abbreviation and are given a randomly generated
                definition
              </li>
              <li>
                Words are randomly chosen from a large object containing arrays
                of words for each letter
              </li>
              <li>Toggle between light and dark themes</li>
              <li>
                Secret mode can be unlocked where users can enter their own
                abbreviations
              </li>
            </ul>
            <div class="workLinks">
              <a
                href="https://alexcalia.com/slangapp"
                class="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/alexcalia/slangapp"
                class="repoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </article>

        <article class="workBox">
          <div class="workImageContainer">
            <img
              src="assets/images/psdconversion.PNG"
              alt="Sanctuary Helpers home page."
            />
          </div>
          <div class="workDescribeContainer">
            <h3>Sanctuary Helpers</h3>
            <h4>
              Technologies Used: <span class="techStack">HTML</span>,{" "}
              <span class="techStack">CSS</span>
            </h4>
            <ul>
              <li>
                Large display mockup and sizings were given and translated into
                a fully responsive website
              </li>
              <li>Orientation for smaller displays were determined by me</li>
            </ul>
            <div class="workLinks">
              <a
                href="https://alexcalia.com/psdconversion"
                class="liveLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/alexcalia/psdconversion"
                class="repoLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
