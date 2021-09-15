import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Resume from "../assets/Resume.pdf";

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <CustomContainer>
        <Nav>
          <Logo to="/">Nam.</Logo>
          <Menu>
            <Item>
              <CustomHashLink to="/#Projects">Works</CustomHashLink>
            </Item>

            <Item>
              {/* <CustomHashLink href={require("../assets/Resume.pdf")}> */}

              <CustomHref href={Resume}>Resume</CustomHref>
            </Item>

            <Item>
              <ItemLink to="/about">About</ItemLink>
            </Item>
          </Menu>
          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>
        </Nav>
        <Overlay open={toggle}>
          <OverlayMenu open={toggle}>
            <Item>
              <CustomHashLink
                to="/#Projects"
                onClick={() => toggleNav(!toggle)}
              >
                Works
              </CustomHashLink>
            </Item>
            <Item>
              <CustomHrefSm href={Resume} onClick={() => toggleNav(!toggle)}>
                Resume
              </CustomHrefSm>
            </Item>
            <Item>
              <ItemLink to="/about" onClick={() => toggleNav(!toggle)}>
                About
              </ItemLink>
            </Item>
          </OverlayMenu>
        </Overlay>
      </CustomContainer>
    </>
  );
};

export default Header;

const CustomContainer = styled(Container)`
  position: relative;

  @media (max-width: 419.98px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const Nav = styled.nav`
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 35px;
  font-weight: 500;
  font-family: "Montserrat";
  list-style: none;
  text-decoration: none;
  color: #000000;
  :hover {
    color: #000000;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  margin-top: 20px;
`;

const CustomHashLink = styled(HashLink)`
  font-size: 25px;
  color: #000000;
  text-decoration: none;
  margin-left: 39px;
  font-weight: 600;
  font-family: "Montserrat";
`;

const ItemLink = styled(Link)`
  font-size: 25px;
  color: #000000;
  text-decoration: none;
  margin-left: 39px;
  font-weight: 600;
  font-family: "Montserrat";
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #000000;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: relative;
  height: ${(props) => (props.open ? "20vh" : 0)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* background-color: #241c56; */
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  /* right: 0; */
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 20px 0px;
    transition: opacity 0.4s ease-in-out;
  }
`;

const CustomHref = styled.a`
  font-size: 25px;
  color: #000000;
  text-decoration: none;
  margin-left: 39px;
  font-weight: 600;
  font-family: "Montserrat";
  text-decoration: none;
`;

const CustomHrefSm = styled.a`
  font-size: 25px;
  color: #000000;
  text-decoration: none;
  margin-left: 39px;
  font-weight: 600;
  font-family: "Montserrat";
`;
