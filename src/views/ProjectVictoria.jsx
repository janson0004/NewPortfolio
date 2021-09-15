import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import MockUp from "../assets/Victoria_mockup.png";
import AppMockUp from "../assets/AimimiApp_mockup.png";
import Color from "../assets/WellWorth_color.png";
import AWSexplain from "../assets/Aws_application.png";

export const ProjectVictoria = () => {
  return (
    <CustomContainer>
      <Image src={MockUp} />
      <TitleWrapper>
        <Title>Victoria</Title>
        <BlockDiv>
          Victoria is an Minimal Viable Product (MVP) mimicking CBDC wallet,
          that was built on Flutter.
          <br />
          <br />
          This project aimed at developing an mobile application that mimicking
          Central Bank Digital Currency, we would like to study the feasibility
          and technical design of CBDC if it were to be implemented in Hong
          Kong. It is also a A-graded course project with financial topic. A
          quick project buily rapidly in few weeks.
          <ButtonWrapper>
            <CustomLink href="https://github.com/janson0004/FTEC3002_CBDC">
              <Button>View GitHub</Button>
            </CustomLink>
          </ButtonWrapper>
        </BlockDiv>
      </TitleWrapper>

      <ExplanTitle>AWS Applications Development</ExplanTitle>
      <Explantion>
        Below is our intended solution diagram. On the left would be the
        connection to the front-facing user interface, that is to be developed
        on Flutter and Android studio. On the right are nodes and members on the
        AWS Managed Blockchain Service, representing the proposed DLT network.
        Connections between the backend and front-end is managed by the
        implemented API applications.
      </Explantion>
      <ColorImage src={AWSexplain} />
      <Explantion>
        Three main API applications were developed to handle network requests,
        for a) checking account balance, b) conversion between CBDC and HKD, and
        c) P2P transactions between two accounts. Other features such as login
        verification, account creation, and synchronisation were also developed,
        but not fully utilised for demonstration purpose.
      </Explantion>

      <ExplanTitle>Authentication</ExplanTitle>
      <Explantion>
        We used Firebase by Google as the authentication and registration method
        for our mobile app, which can securely save user data in the cloud and
        provide the same personalized experience across all of the user's
        devices. It supports authentication using passwords, and popular
        federated identity providers like Google, Apple, Microsoft, and more.
        Fingerprint authentication is also provided, which highly enhances our
        mobile app’s security.
      </Explantion>

      <ExplanTitle>Front-end development</ExplanTitle>
      <Explantion>
        Aimimi is a mobile application that built with Flutter framework, which
        is an open-source UI software development kit. Our idea is to provide a
        electronic wallet for users to access their CBDC acccount and do
        conversion and p2p lending.
      </Explantion>

      <ExplanTitle>Back-end Development</ExplanTitle>
      <Explantion>
        Our backend development mainly focuses on the database management and
        the request and response between our data and server. Beside, we decided
        to use the following tools for backend development:
      </Explantion>

      <SubTitle>DynamoDB</SubTitle>
      <Explantion>
        To compensate the absence of the participating stakeholders-representing
        elements, but still eager to deliver an MVP, Dynamo DB was selected to
        process data to-be-handled by a supposedly DLT network. A master
        database covering account balances in both cash and CBDC with respect to
        each user ID would be able to handle network requests.
      </Explantion>

      <SubTitle>AWS Lambda</SubTitle>
      <Explantion>
        AWS Lambda is the easiest tool on to implement Node.JS based HTTP API.
        At this experimentation stage, HTTP and RESTful APIs do not have
        noticeable difference. Having considered HTTP is easier to be tested,
        especially with GET method on web browser, we have decided to pilot on
        HTTP API. Each Node.JS function would handle different HTTP request. In
        all circumstances, response in JSON format would be returned for easier
        processing. Here is an example of getting user's account balance from
        DynamoDB.
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
  margin-top: 40px;
  max-width: 60%; ;
`;
