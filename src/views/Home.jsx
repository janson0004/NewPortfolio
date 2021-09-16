import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import ProPic from "../assets/Propic.png";
import Projects from "../components/Projects";
import WellWorth from "../components/WellWorth";
import Victoria from "../components/Victoria";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <CustomContainer>
      <MiddleDiv>
        <ProfileImg src={ProPic} />
        <BlockDiv>
          <Hello>Hello! </Hello>
          <Title>
            I am Janson Cheung <br />
          </Title>
          <Title>a Financial Technology student</Title>
          <MediumTitle>
            I am Janson Cheung, a Financial Technology student
          </MediumTitle>
        </BlockDiv>
        <Description>
          I love designing, coding and interested in finance
        </Description>
      </MiddleDiv>
      <Works id="Projects">Works</Works>
      <CustomLink to="/aimimi">
        <DisplayEnd>
          <Projects />
        </DisplayEnd>
      </CustomLink>
      <CustomLink to="/wellworth">
        <WellWorth />
      </CustomLink>
      <CustomLink to="/victoria">
        <DisplayEnd>
          <Victoria />
        </DisplayEnd>
      </CustomLink>
    </CustomContainer>
  );
};

const MiddleDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1023.98px) {
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: flex-start;
  }

  @media (max-width: 419.98px) {
    margin-top: 30px;
  }
`;

const ProfileImg = styled.img`
  max-width: 100%;
  position: relative;

  @media (max-width: 1023.98px) {
    display: none;
  }
`;

const Title = styled.span`
  font-size: 50px;
  font-weight: 600;

  @media (max-width: 1023.98px) {
    display: none;
  }
`;

const MediumTitle = styled.span`
  font-size: 60px;
  font-weight: 600;
  display: none;
  @media (max-width: 1023.98px) {
    display: block;
  }

  @media (max-width: 1023.98px) {
    display: block;
  }

  @media (max-width: 769.98px) {
    font-size: 35px;
  }
`;

const Hello = styled.span`
  font-size: 50px;
  font-weight: 600;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #ffd0ae 50%);
  @media (max-width: 769.98px) {
    font-size: 35px;
  }
`;

const Description = styled.span`
  color: #777777;
  font-size: 30px;
  font-weight: 500;
  /* margin-top: 24px; */
  margin-right: 180px;

  @media (max-width: 1023.98px) {
    margin-right: 0;
  }

  @media (max-width: 769.98px) {
    margin-top: 25px;
    font-size: 18px;
  }
`;

const Works = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: #000000;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #cef8dc 50%);

  @media (max-width: 419.98px) {
    font-size: 25px;
  }
`;

const BlockDiv = styled.div`
  display: block;
`;

const CustomContainer = styled(Container)`
  margin-bottom: 80px;

  @media (max-width: 419.98px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const DisplayEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;
