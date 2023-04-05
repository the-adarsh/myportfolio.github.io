import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;

const FooterText = styled.p`
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterText>© 2023 - All Rights Reserved.</FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
