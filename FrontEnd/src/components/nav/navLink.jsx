import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavLink = ({ icon, label }) => {
  return (
    <Nav.Link
      as={Link}
      className="d-flex flex-column justify-content-center align-items-center lh-1"
    >
      <div className="d-flex mb-1 fs-5">{icon}</div>
      <div className="small fw-light">
        <small>{label}</small>
      </div>
    </Nav.Link>
  );
};
