import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/styles.scss";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
