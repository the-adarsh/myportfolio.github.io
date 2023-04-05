import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: center;
  padding: 5rem 15rem;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.text};
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Skill = styled.div`
  background-color: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
`;

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <Title>About Me</Title>
        <Description>
          I am a computer science engineering student, at SRM University
          Modinagar NCR Campus, seeking to implement my technical skills and
          gain experience and mentorship. My ability to learn skills quickly
          with a more pragmatic approach and adapt to any social environment are
          my strenghts.
        </Description>
        <Title>My Skills</Title>
        <SkillsWrapper>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsWrapper>
        <Title>MY PROFILES</Title>
        <a href="https://www.linkedin.com/in/adarsh-bharti-a8ba761b6">
          <button>LinkedIn</button>
        </a>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
