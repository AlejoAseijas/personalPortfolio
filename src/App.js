import React, { Suspense } from "react";
import "./styles/styles.scss";
const AboutMe = React.lazy(() => import("./components/AboutMe"));
const Contact = React.lazy(() => import("./components/Contact"));
const Header = React.lazy(() => import("./components/Header"));
const Menu = React.lazy(() => import("./components/Menu"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <main>
          <Header />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer>
          <p>&copy; Alejo Aseijas 2021</p>
        </footer>
      </Suspense>
    </div>
  );
}

export default App;
