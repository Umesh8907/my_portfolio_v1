import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
