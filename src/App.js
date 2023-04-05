import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
//import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./themes";
//import { Routes, Route } from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppWrapper>
        <Navbar toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
