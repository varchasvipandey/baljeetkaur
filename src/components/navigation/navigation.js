import React from "react";

import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <a className="jump-to-top" href="#home">
        <ion-icon name="chevron-up-circle"></ion-icon>
      </a>
      <Navbar color="light" light expand="md" className="navigation-bar">
        <Nav className="ml-auto d-flex flex-row" navbar>
          <NavItem>
            <NavLink href="#home" className="navigation-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#social" className="navigation-link">
              Social
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#gallery" className="navigation-link">
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#blogs" className="navigation-link">
              Blogs
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </nav>
  );
};

export default Navigation;
