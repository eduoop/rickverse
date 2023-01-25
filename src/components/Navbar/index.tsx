import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Nav } from "./styles";

const Navbar = () => {
  const activeLink = "border-solid border-b-4 text-red border-red px-3 font-[500] text-lg";
  const normalLink = "text-white border-solid border-b-4 border-transparent px-3 font-[500] text-lg";

  return (
    <React.Fragment>
        <Nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Link style={{ fontFamily: "Poppins"}}>Home</Link>
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Link style={{ fontFamily: "Poppins"}}>Personagens</Link>
          </NavLink>

          <NavLink
            to="/locations"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Link style={{ fontFamily: "Poppins"}}>Locais</Link>
          </NavLink>

          <NavLink
            to="/episodes"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Link style={{ fontFamily: "Poppins"}}>Epsodios</Link>
          </NavLink>
        </Nav>
    </React.Fragment>
  );
};

export default Navbar;