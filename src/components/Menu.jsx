import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Alejo Aseijas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="about" spy={true} smooth={true}>
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="works" spy={true} smooth={true}>
                Proyectos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" spy={true} smooth={true}>
                Contacto
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
