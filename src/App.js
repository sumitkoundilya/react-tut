import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./AppRoutes";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function App() {
  const [header, setHeader] = useState("");
  const navigate = useNavigate();

  const navLists = [
    { name: "Cart", link: "/cart" },
    { name: "Actors", link: "/actors" },
  ];

  return (
    <div className="App">
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              React-Tutorial
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {navLists.map((nav) => (
                  <Nav.Link key={nav.link} onClick={() => navigate(nav.link)}>
                    {nav.name}
                  </Nav.Link>
                ))}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <header className="App-header">
        <h1>{header}</h1>
      </header>
      <div>
        <AppRoutes setHeader={setHeader} routeTo={navLists[0].link}></AppRoutes>
      </div>
    </div>
  );
}

export default App;
