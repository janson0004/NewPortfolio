import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Copyright>@2021 Janson Cheung</Copyright>
        <IconText>
          <IconItem href="https://github.com/janson0004/">
            <FaGithubSquare />
          </IconItem>
          <IconItem href="https://www.linkedin.com/in/cheuk-nam-janson-cheung-6271b5203/">
            <FaLinkedin />
          </IconItem>
          <IconItem href="https://www.facebook.com/cheung.cheuknam.3">
            <FaFacebookSquare />{" "}
          </IconItem>
          <IconItem href="mailto: jansoncheung0004@gmail.com">
            <FaEnvelope />
          </IconItem>
        </IconText>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Wrapper = styled.div`
  max-width: 100%;
  height: 97px;
  background-color: #01081a;
  display: flex;
  align-items: center;
  padding-left: 117px;
  padding-right: 101px;
  justify-content: space-between;
  @media (max-width: 991.98px) {
    flex-direction: column-reverse;
    padding-bottom: 23px;
    height: 150px;
    align-items: flex-start;
    justify-content: right;
    padding-top: 20px;
  }

  @media (max-width: 419.98px) {
    padding-left: 25px;
  }
`;

const Copyright = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  @media (max-width: 419.98px) {
    font-size: 16px;
  }
`;

const IconText = styled.div`
  display: flex;
`;

const IconItem = styled.a`
  font-size: 40px;
  color: #ffffff;
  margin-left: 78px;
  :hover {
    color: white;
  }

  @media (max-width: 991.98px) {
    font-size: 35px;
    margin-bottom: 20px;
    margin-left: 0;
    margin-right: 35px;
  }

  @media (max-width: 419.98px) {
    font-size: 30px;
    margin-right: 20px;
  }
`;
