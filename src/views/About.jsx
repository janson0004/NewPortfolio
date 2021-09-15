import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";

import Face from "../assets/Face.svg";
import { Row, Col, Form } from "react-bootstrap";
import {
  FaCode,
  FaShoppingBag,
  FaWrench,
  FaRegUser,
  FaRegEnvelope,
  FaRegComments,
} from "react-icons/fa";

const About = () => {
  return (
    <CustomContainer>
      <HeadingDiv>
        <BlockDiv>
          <Title> Want to know me more?</Title>
          <Description>
            Hi folks! My name is Cheung Cheuk Nam Janson. A year 4 student
            majoring in Financial Technology at The Chinese University of Hong
            Kong.
          </Description>
          <Description>
            I love designing and coding various web and mobile application.
            Recently delving into Machine Learning and Software Engineering.
          </Description>
          <Description>
            I am also a cat lover, feel free to chat with me!
          </Description>
        </BlockDiv>
        <FlexDiv>
          <Img src={Face} />
          <Circle>
            <CustomHref href="/about/#ContactMe">
              Interested in my <br />
              works?
              <br />
              Let's talk!
            </CustomHref>
          </Circle>
        </FlexDiv>
      </HeadingDiv>

      <HeadLine>Skills</HeadLine>

      <CustomRow>
        <CustomCol lg={4}>
          <EachSkillsDiv>
            <Icon>
              <FaCode />
            </Icon>
            <SkillTitle>Coding</SkillTitle>
            Javascript, HTML5, CSS3, Python, VBA, Node.js, Java, C
          </EachSkillsDiv>
        </CustomCol>
        <CustomCol lg={4}>
          <EachSkillsDiv>
            <Icon>
              <FaWrench />
            </Icon>
            <SkillTitle>Environment</SkillTitle>
            React, Flutter, Express, MongoDB, MySQL, Bootsteap, Github,
            Wordpress
          </EachSkillsDiv>
        </CustomCol>
        <CustomCol lg={4}>
          <EachSkillsDiv>
            <Icon>
              <FaShoppingBag />
            </Icon>
            <SkillTitle>UI/UX design </SkillTitle>
            Figma, Adobe XD, Photoshop
          </EachSkillsDiv>
        </CustomCol>
      </CustomRow>

      <HeadLine id="ContactMe">Contact Me</HeadLine>
      <ContactForm method="POST">
        <FormTitle>Your Name</FormTitle>
        <BarWrapper>
          <IconAndTagWrapper>
            <CustomIcon>
              <FaRegUser />
            </CustomIcon>
            <Input id="Name" type="name" required></Input>
          </IconAndTagWrapper>
        </BarWrapper>

        {/* Mail part */}
        <FormTitle>Mail</FormTitle>
        <BarWrapper>
          <IconAndTagWrapper>
            <CustomIcon>
              <FaRegEnvelope />
            </CustomIcon>
            <Input id="email" type="email" required></Input>
          </IconAndTagWrapper>
        </BarWrapper>

        {/* Message Part */}
        <FormTitle>Message</FormTitle>
        <MessageWrapper>
          <IconWrapper>
            <CustomIcon>
              <FaRegComments />
            </CustomIcon>
            <MessageInput
              id="message"
              type="text"
              placeholder="Enter your messages here..."
              rows={8}
              required
            ></MessageInput>
          </IconWrapper>
        </MessageWrapper>
        <SubmitButton>Send Message</SubmitButton>
      </ContactForm>
    </CustomContainer>
  );
};

export default About;

const CustomContainer = styled(Container)`
  margin-bottom: 80px;

  @media (max-width: 419.98px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const HeadingDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 1103px) {
    justify-content: flex-start;
  }

  @media (max-width: 419.98px) {
    margin-top: 70px;
  }
`;

const BlockDiv = styled.div`
  max-width: 50%;
  @media (max-width: 991.98px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 26px;
  font-weight: 600;

  @media (max-width: 419.98px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  color: #777777;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 419.98px) {
    font-size: 18px;
  }
`;

const Img = styled.img`
  width: 265px;
  height: 250px;
  position: relative;
  right: -70px;

  @media (max-width: 1103px) {
    right: -10;
  }

  @media (max-width: 991.98px) {
    display: none;
  }
`;

const Circle = styled.div`
  height: 350px;
  width: 350px;
  background-color: #ecf9fb;
  border-radius: 50%;
  display: flex;

  font-size: 25px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1103px) {
    height: 300px;
    width: 300px;
    font-size: 20px;
  }
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const HeadLine = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: #000000;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #ced7f8 50%);

  @media (max-width: 419.98px) {
    font-size: 25px;
  }
`;

const EachSkillsDiv = styled.div`
  height: 380px;
  background-color: #eef2fe;
  font-weight: 500;
  display: flex;
  padding: 50px 35px 60px 30px;
  flex-direction: column;
  font-size: 20px;
  color: #777777;

  @media (max-width: 1119.98px) {
    font-size: 16px;
    padding: 50px 80px 50px 50px;
    height: 300px;
    border-radius: 10px;
  }

  @media (max-width: 419.98px) {
    font-size: 14px;
  }
`;

const Icon = styled.div`
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  background: white;
  justify-content: center;
  color: #456ab2;
  font-size: 30px;
  margin-bottom: 25px;
`;

const SkillTitle = styled.h3`
  font-size: 30px;
  color: #241c56;
  margin-bottom: 25px;
  font-weight: 600;
  @media (max-width: 1119.98px) {
    font-size: 25px;
  }

  @media (max-width: 419.98px) {
    font-size: 20px;
  }
`;

const CustomRow = styled(Row)`
  margin-top: 45px;
  margin-bottom: 85px;
`;

const ContactForm = styled.form`
  padding: 45px 135px 50px 135px;

  @media (max-width: 991.98px) {
    padding: 45px 50px 50px 50px;
  }

  @media (max-width: 419.98px) {
    padding: 30px 0 0 0;
  }
`;

const BarWrapper = styled.div`
  border-radius: 10px;
  border: 2.41px solid #e5e5e5;
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 100%;
  justify-content: space-between;
  padding-left: 25px;
  margin-bottom: 25px;

  @media (max-width: 419.98px) {
    height: 40px;
  }
`;

const IconAndTagWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const CustomIcon = styled.span`
  color: #4d4e77;
  font-size: 25px;

  @media (max-width: 419.98px) {
    font-size: 20px;
  }
`;

const FormTitle = styled.h6`
  color: #5d5e7f;
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 419.98px) {
    font-size: 18px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  border: 2.41px solid #e5e5e5;
  padding-top: 25px;
  height: 300px;
  max-width: 100%;
  padding-left: 25px;
  margin-bottom: 25px;

  @media (max-width: 419.98px) {
    padding-top: 10px;
  }
`;

const Input = styled.input`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  color: black;
  border: none;
  width: 100%;
  outline: none;
  margin-left: 17px;
  @media (max-width: 767.98px) {
    font-size: 14px;
  }
`;

const MessageInput = styled.textarea`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  color: black;

  border: none;
  width: 100%;
  outline: none;
  margin-left: 17px;
  appearance: none;
  resize: none;
  @media (max-width: 767.98px) {
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  width: 250px;
  border-radius: 10px;
  background-color: #ea9093;
  color: #ffffff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  display: block;
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 419.98px) {
    width: 200px;
    height: 45px;
    font-size: 16px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const CustomCol = styled(Col)`
  @media (max-width: 991.98px) {
    margin-bottom: 20px;
  }
`;

const CustomHref = styled.a`
  text-decoration: none;
  color: #000000;

  :hover {
    color: #000000;
  }
`;
