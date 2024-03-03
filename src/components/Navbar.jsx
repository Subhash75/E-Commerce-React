import React from "react";
import Logo from "../assets/images/logo.png";
import styled from "styled-components";

function Navbar() {
    return (
        <NavbarStyled>
            <img src={Logo} loading="lazy" alt="logo" />
        </NavbarStyled>
    );
}

export default Navbar;

const NavbarStyled = styled.div`
  padding: 5px 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-bottom: 0.25px solid #e4e4e4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  img {
    width: 200px;
    height: 50px;
    object-fit: contain;
  }
`;
