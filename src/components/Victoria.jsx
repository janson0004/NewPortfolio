import React from "react";
import styled from "styled-components/macro";
import Logo from "../assets/Victoria_Logo.svg";
import Phone1 from "../assets/CBDC.svg";
import MdImage from "../assets/Victoria_md.svg";
import SmImage from "../assets/Victoria_sm.svg";

const Victoria = () => {
  return (
    <Backgroud>
      <Description>
        <IconTittleWrapper>
          <AppIcon src={Logo} />
          <Title>Project Victoria</Title>
        </IconTittleWrapper>

        <AppDescription>
          A mobile application to mimick Central
          <br /> Bank Digital Currency(CBDC)
        </AppDescription>
        <PhotoSmall src={SmImage} />
        <Environment>Flutter Node.js DynamoDB AWS Lambda</Environment>
        <Button>SEE PROJECT</Button>
      </Description>

      <Photo src={Phone1} />
      <MediumPhoto src={MdImage} />
    </Backgroud>
  );
};

export default Victoria;

const IconTittleWrapper = styled.div`
  @media (max-width: 419.98px) {
    display: flex;
    align-items: center;
  }
`;
const Backgroud = styled.div`
  background-color: #fbf8f5;
  display: flex;
  height: 450px;
  width: 90%;
  padding-left: 80px;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  border-radius: 10px;
  margin-bottom: 80px;
  padding-right: 100px;

  @media (max-width: 1207.98px) {
    padding-right: 60px;
  }
  @media (max-width: 769.98px) {
    padding-left: 40px;
    padding-right: 20px;
    width: 100%;
  }
  @media (max-width: 419.98px) {
    display: block;
    padding: 30px 25px 20px 25px;
    width: 100%;
    margin-bottom: 0;
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

  @media (max-width: 419.98px) {
    display: none;
  }

  @media (max-width: 769.98px) {
    font-size: 14px;
  }
`;

const Environment = styled.span`
  display: block;
  font-size: 18px;
  color: #563b1c;
  font-weight: 500;
  margin-top: 46px;
  margin-bottom: 46px;
  @media (max-width: 419.98px) {
    font-size: 12px;
    margin-top: 30px;
  }

  @media (max-width: 769.98px) {
    font-size: 14px;
  }
`;

const Button = styled.span`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 419.98px) {
    display: none;
  }

  @media (max-width: 769.98px) {
    font-size: 16px;
  }
`;

const Photo = styled.img`
  margin-left: 160px;
  @media (max-width: 1207.98px) {
    display: none;
    margin-left: 0;
  }
`;
const MediumPhoto = styled.img`
  display: none;
  @media (max-width: 1207.98px) {
    display: block;
  }
  @media (max-width: 419.98px) {
    display: none;
  }
`;

const PhotoSmall = styled.img`
  display: none;
  @media (max-width: 419.98px) {
    width: 100%;
    display: block;
    margin-top: 20px;
  }
`;
