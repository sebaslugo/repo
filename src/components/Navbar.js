import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/clientes">Clientes</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="nuevoCliente">Nuevo Cliente</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
