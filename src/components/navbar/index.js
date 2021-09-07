import React from "react";
import { NavLink } from "react-router-dom";
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem
} from "./navBarElements";

export default function NavBar() {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">word</NavLogo>
          <MobileIcon></MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink></NavLink>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
}
