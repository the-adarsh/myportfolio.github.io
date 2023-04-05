import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = ({ toggleTheme }) => {
  return (
    <NavbarWrapper>
      <Logo>Portfolio</Logo>
      <Button onClick={toggleTheme}>Switch Theme</Button>
    </NavbarWrapper>
  );
};

export default Navbar;
