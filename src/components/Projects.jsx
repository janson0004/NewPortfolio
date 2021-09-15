import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import Logo from "../assets/Group 3aimimi.svg";
import Phone1 from "../assets/Aimimi_phone.svg";
import SmAimimi from "../assets/Aimimi_sm.svg";

const Projects = () => {
  return (
    <Backgroud>
      <Description>
        <IconTittleWrapper>
          <AppIcon src={Logo} />
          <Title>Aimimi</Title>
        </IconTittleWrapper>

        <AppDescription>
          A cross-platform goal sharing and tracking application
        </AppDescription>
        <PhotoSmall src={SmAimimi} />
        <Environment>React(Web) Flutter(App) Node.js MongoDB</Environment>
        <Button>SEE PROJECT</Button>
      </Description>

      <PhotoLarge src={Phone1} />
    </Backgroud>
  );
};

export default Projects;

const IconTittleWrapper = styled.div`
  @media (max-width: 419.98px) {
    display: flex;
    align-items: center;
  }
`;
const Backgroud = styled.div`
  background-color: #f4fbfb;
  display: flex;
  height: 450px;
  width: 90%;
  padding-left: 80px;
  align-items: center;
  margin-top: 29px;
  border-radius: 10px;
  @media (max-width: 769.98px) {
    padding-left: 40px;
    width: 100%;
  }
  @media (max-width: 419.98px) {
    display: block;
    padding: 30px 25px 20px 25px;
    width: 100%;
  }
`;
const Description = styled.div``;

const Title = styled.h2`
  font-size: 30px;
  color: #000000;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 16px;

  @media (max-width: 769.98px) {
    font-size: 25px;
  }
  @media (max-width: 419.98px) {
    font-size: 20px;
    margin-left: 15px;
  }
`;

const AppIcon = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 419.98px) {
    width: 36px;
    height: 36px;
  }
`;

const AppDescription = styled.span`
  font-size: 18px;
  color: #777777;
  font-weight: 500;
  margin-top: 16px;
  @media (max-width: 769.98px) {
    font-size: 14px;
  }
  @media (max-width: 419.98px) {
    display: none;
  }
`;

const Environment = styled.h6`
  font-size: 18px;
  color: #1c4b56;
  font-weight: 500;
  margin-top: 46px;
  margin-bottom: 46px;
  @media (max-width: 769.98px) {
    font-size: 14px;
  }
  @media (max-width: 419.98px) {
    font-size: 12px;
    margin-top: 16px;
  }
`;

const Button = styled.h5`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 419.98px) {
    display: none;
  }
  @media (max-width: 769.98px) {
    font-size: 16px;
  }
`;

const PhotoLarge = styled.img`
  @media (max-width: 1207.98px) {
    max-width: 70%;
  }

  @media (max-width: 769.98px) {
    max-width: 60%;
    margin-left: 20px;
  }

  @media (max-width: 419.98px) {
    display: none;
  }
`;

const PhotoSmall = styled.img`
  display: none;
  @media (max-width: 419.98px) {
    display: block;
    margin-top: 30px;
  }
`;
