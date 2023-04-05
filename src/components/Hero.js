import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("./images/Hero.jpg"); "Hero" : unknown word.
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  border-radius: 50% 10% 50% 10%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Title>Welcome to my portfolio</Title>
      <Subtitle>My Name Is Adarsh Bharti And I am a Web Developer</Subtitle>
    </HeroWrapper>
  );
};

export default Hero;
