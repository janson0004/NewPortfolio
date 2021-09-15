import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import MockUp from "../assets/Aimimi_mockup.png";
import AppMockUp from "../assets/AimimiApp_mockup.png";
import { Link } from "react-router-dom";

export const Aimimi = () => {
  return (
    <CustomContainer>
      <Image src={MockUp} />
      <TitleWrapper>
        <Title>Aimimi</Title>
        <BlockDiv>
          Aimimi is an innovative goal sharing application. Users will be able
          to customize their goals or choose their goals from our suggested goal
          list.
          <br />
          <br />
          This project is aimed to assist users to achieve their goals in a more
          relaxed, efficient and effective way. It is also a A-graded course
          project with free topic of Software Engineering. A quick project buily
          rapidly in few months.
          <ButtonWrapper>
            <CustomLink href="https://aimimi.app/">
              <Button>View Live</Button>
            </CustomLink>
            <CustomLink href="https://github.com/terrence-au/aimimi_flutter">
              <Button>View GitHub</Button>
            </CustomLink>
          </ButtonWrapper>
        </BlockDiv>
      </TitleWrapper>

      <Image src={AppMockUp} />
      <ExplanTitle>Front-end Development</ExplanTitle>
      <Explantion>
        Aimimi is a web application, also a progressive web application (PWA)
        for mobile users. We are going to use react for our front-end
        development.
      </Explantion>

      <Explantion>
        Also, we are planning to use the react-bootstrap and styled-component in
        developing user interfaces. We hope to provide users with an
        user-friendly, responsive, and high performance experience for reaching
        their goals.
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
  margin-right: 300px;

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
