import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import MockUp from "../assets/WellWorth_mockup.png";
import AppMockUp from "../assets/AimimiApp_mockup.png";
import Color from "../assets/WellWorth_color.png";
import { Link } from "react-router-dom";

export const WellWorthTheWait = () => {
  return (
    <CustomContainer>
      <Image src={MockUp} />
      <TitleWrapper>
        <Title>Well Worth The Wait</Title>
        <BlockDiv>
          Well Worth The Wait is an resturant waiting time tracking web
          application. Users will be able to customize their favourite
          resturants .
          <br />
          <br />
          This project is aimed to assist users to check the waiting time for
          resturants. User also able to log in and choose a subset of favourite
          places It is also a A-graded course project with free topic of
          Building Web Application. A quick project buily rapidly in few days.
          <ButtonWrapper>
            <CustomLink href="https://github.com/janson0004/well-worth-the-wait">
              <Button>View GitHub</Button>
            </CustomLink>
          </ButtonWrapper>
        </BlockDiv>
      </TitleWrapper>

      <ExplanTitle>Responsive & Clean UI/UX Design</ExplanTitle>
      <Explantion>
        With a bright and purple color, our app enlights your whole day. The
        entire application use only the color #A9BCEE, its shaded color #7D68FF
        and achromatic colors with different grayscale
      </Explantion>
      <ColorImage src={Color} />
      <ExplanTitle>Front-end development</ExplanTitle>
      <Explantion>
        Also, we used the react-bootstrap and styled-component in developing
        user interfaces. We hope to provide users with an user-friendly,
        responsive, and high performance experience for tracking the waiting
        time.
      </Explantion>

      <ExplanTitle>Back-end Development</ExplanTitle>
      <Explantion>
        Our backend development mainly focuses on the database management and
        the request and response between our data and server. Beside, we decided
        to use the following tools for backend development:
      </Explantion>
      <SubTitle>MongoDB</SubTitle>
      <Explantion>
        It is an aggregation framework that provides a secure and NoSQL database
        that can scale to a high level of write and read traffic. Moreover, it
        allows scaling across or within multiple distributed data centers. With
        its document based feature, it can provide a better availability and
        scalability than other database management systems.
      </Explantion>
      <SubTitle>Express</SubTitle>
      <Explantion>
        We designed Express as the Node.js web framework, which provides
        mechanisms to integrate with rendering engines that can generate
        responses by inserting data from MongoDB. Also, at different URL paths,
        Express allows writing handlers for requests with HTTP verbs, providing
        RESTful API for frontend.
      </Explantion>
    </CustomContainer>
  );
};

const CustomContainer = styled(Container)`
  margin-bottom: 80px;

  @media (max-width: 419.98px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  padding-top: 76px;
  font-weight: 500;
  font-size: 22px;
  justify-content: space-between;
  margin-bottom: 70px;
  @media (max-width: 767px) {
    display: block;
    font-size: 20px;
  }

  @media (max-width: 419px) {
    font-size: 18px;
    padding-top: 40px;
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin-right: 200px;

  @media (max-width: 991px) {
    margin-right: 100px;
    font-size: 40px;
  }

  @media (max-width: 419px) {
    font-size: 35px;
  }
`;

const BlockDiv = styled.div`
  @media (max-width: 991px) {
    margin-right: 0px;
  }
`;

const Button = styled.button`
  margin-top: 50px;

  width: 180px;

  background-color: #01081a;
  color: #ffffff;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 22px;
  font-weight: 600;
  margin-right: 20px;

  @media (max-width: 419px) {
    margin-top: 20px;
    font-size: 18px;
    width: 165px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  @media (max-width: 419px) {
    flex-direction: column;
  }
`;

const Explantion = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #4b4b4b;
  margin-top: 25px;
  @media (max-width: 419px) {
    font-size: 18px;
  }
`;

const ExplanTitle = styled.h6`
  font-weight: 600;
  font-size: 30px;
  margin-top: 50px;

  @media (max-width: 419px) {
    font-size: 22px;
  }
`;

const SubTitle = styled.h6`
  font-size: 25px;
  font-weight: 600;
  margin-top: 25px;
`;

const CustomLink = styled.a`
  text-decoration: none;
`;

const ColorImage = styled.img`
  margin-top: 10px;
  max-width: 60%; ;
`;
