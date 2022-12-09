import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Nav = styled.nav`
  overflow: hidden;
  background-color: #333;
`;

const Container = styled.div`
  overflow: hidden;
  background-color: #333;
  display: flex;
  flex-direction: column;
`;

const FirstLink = styled(Link)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

const NavLink = styled(Link)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

const Bars = styled(FaBars)`
  /* display: none;*/
  color: #808080;
  /* @media screen and (max-width: 600px) { */
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  /* } */
`;

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [media, setMedia] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );
  console.log("dropdownOpen", dropdownOpen);
  console.log("media", media);

  useEffect(() => {
    window.matchMedia("(min-width: 600px)").addEventListener("change", (e) => {
      setMedia(e.matches);
    });
  }, []);
  return (
    <>
      {media ? (
        <Nav>
          {/* <NavMenu> */}
          <FirstLink to="/">Pre-Flight</FirstLink>
          <NavLink to="/pilotpass">Manage Pilots/Passengers</NavLink>
          <NavLink to="/aircraft">Manage Aircraft</NavLink>
          <NavLink to="/weather">Weather</NavLink>
          {/* </NavMenu> */}
        </Nav>
      ) : (
        <Nav>
          {/* <NavMenu> */}
          {dropdownOpen ? (
            <Container>
              <FirstLink to="/">Pre-Flight</FirstLink>
              <NavLink to="/pilotpass">Manage Pilots/Passengers</NavLink>
              <NavLink to="/aircraft">Manage Aircraft</NavLink>
              <NavLink to="/weather">Weather</NavLink>
            </Container>
          ) : (
            <FirstLink to="/">Pre-Flight</FirstLink>
          )}
          <Bars onClick={() => setDropdownOpen(!dropdownOpen)} />
          {/* </NavMenu> */}
        </Nav>
      )}
    </>
  );
};
export default NavBar;
