import React from "react";

import HeroSection from "../Components/HeroSection";
import TechStacksSection from "../Components/TechStacksSection";
import ProjectsSection from "../Components/ProjectsSection";
import ServicesSection from "../Components/ServicesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TechStacksSection />
      <ProjectsSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
