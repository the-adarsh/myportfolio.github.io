import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

const FormInput = styled.input`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  width: 100%;
`;

const FormTextArea = styled.textarea`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  width: 100%;
  height: 10rem;
`;

const FormButton = styled.button`
  background-color: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContent>
        <Title>Contact Me</Title>
        <FormWrapper>
          <FormInput type="text" placeholder="Name" />
          <FormInput type="email" placeholder="Email" />
          <FormTextArea placeholder="Message" />
          <FormButton>Send</FormButton>
        </FormWrapper>
      </ContactContent>
    </ContactWrapper>
  );
};

export default Contact;
