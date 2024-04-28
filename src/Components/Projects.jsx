import React from 'react'
import Cards from './Cards'
import { projects_data } from '../Constants/data.js';

const Projects = () => {
  return (
    <div className="home-page  container">
      <h1>Featured Projects</h1>
      <div className="project-list grid grid-cols-2">
        {/* Mapping projects to project cards */}
        {projects_data.map((projects_data) => (
          <Cards key={projects_data.id} title={projects_data.title} description={projects_data.description}  />
        ))}
      </div>
    </div>
  );
};



export default Projects