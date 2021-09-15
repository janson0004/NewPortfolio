import React, { useState } from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <Wrapper expand="lg">
      <CustomContainer>
        <NavItem to="/">
          <Navbar.Brand>
            <Brand>Nam.</Brand>
          </Navbar.Brand>
        </NavItem>
        <Hamburger>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Hamburger>
        <Items>
          <ItemsLink to="/#Projects">Works</ItemsLink>
          <ItemsLink>Resume</ItemsLink>
          <ItemsLink to="/about">About</ItemsLink>
        </Items>
      </CustomContainer>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled(Navbar)`
  padding-top: 20px;
  padding-bottom: 10px;
  position: relative;
  z-index: 1000;

  .navbar-brand {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .navbar-toggler {
    border: none;
  }
  .navbar-nav {
    padding-left: 10px;
  }
  .navbar-con .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='square' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;

const NavItem = styled(Link)`
  font-size: 20px;
  color: #000000;
  text-decoration: none;

  font-weight: 500;
  font-family: "Montserrat";
`;
const CustomContainer = styled(Container)`
  position: relative;
`;

const Brand = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #000000;
  font-family: "Montserrat";
`;

const Items = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ItemsLink = styled(Link)`
  font-size: 20px;
  color: #000000;
  text-decoration: none;
  margin-left: 39px;
  font-weight: 600;
  font-family: "Montserrat";
`;

const Hamburger = styled.div``;

const Line = styled.div``;
