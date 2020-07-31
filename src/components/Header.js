import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
