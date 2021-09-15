import React from "react";
import styled from "styled-components/macro";

import Logo from "../assets/iconWellWorth_logo.svg";
import Phone1 from "../assets/Well_worth.svg";
import MdImage from "../assets/WellWorth_md.svg";
import SmImage from "../assets/WellWorth_sm.svg";

const WellWorth = () => {
  return (
    <Backgroud>
      <Description>
        <IconTittleWrapper>
          <AppIcon src={Logo} />
          <Title>Well Worth the Wait</Title>
        </IconTittleWrapper>

        <AppDescription>
          A web application integrated with Waiting time of Restaurants in
          Google Maps
        </AppDescription>
        <PhotoSmall src={SmImage} />
        <Environment>React Node.js MongoDB</Environment>
        <Button>SEE PROJECT</Button>
      </Description>

      <Photo src={Phone1} />
      <PhotoMedium src={MdImage} />
    </Backgroud>
  );
};

export default WellWorth;

const IconTittleWrapper = styled.div`
  @media (max-width: 419.98px) {
    display: flex;
    align-items: center;
  }
`;

const Backgroud = styled.div`
  background-color: #f7f5fb;
  display: flex;
  height: 450px;
  width: 90%;
  padding-left: 80px;
  align-items: center;
  margin-top: 40px;
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
    margin-right: 20px;
  }
  @media (max-width: 419.98px) {
    display: none;
  }
`;

const Environment = styled.h6`
  font-size: 18px;
  color: #5539fe;
  font-weight: 500;
  margin-top: 46px;
  margin-bottom: 46px;

  @media (max-width: 419.98px) {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 90px;
  }
  @media (max-width: 769.98px) {
    font-size: 14px;
  }
`;

const Button = styled.h5`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 769.98px) {
    font-size: 16px;
  }
  @media (max-width: 419.98px) {
    display: none;
  }
`;

const Photo = styled.img`
  margin-left: 40px;
  width: 600px;
  height: 600px;
  @media (max-width: 1207.98px) {
    display: none;
  }
`;

const PhotoMedium = styled.img`
  width: 80%;
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
    margin-top: 40px;
  }
`;
