import React from 'react'
import Cards from './Cards.jsx'
import { projects_data } from '../Constants/data.js';

const ProjectsSection = () => {
  return (
    <div className='w-full bg-slate-100 pb-20'>
    <div className="home-page  w-[75%] mx-auto">
    <h1 className="text-center font-bold text-4xl pt-8">My Projects</h1>
        <h2 className="text-center pt-2 text-lg ">
          
        "Visionary Initiatives Making an Impact"
        </h2>
      <div className=" project-list grid grid-cols-3 place-items-center justify-items-center content-center  gap-4 mt-8">
        {/* Mapping projects to project cards */}
        {projects_data.map((projects_data) => (
          <Cards key={projects_data.id} title={projects_data.title} description={projects_data.description} image_url={projects_data.image_url}  />
        ))}
      </div>
    </div>
    </div>
  );
};



export default ProjectsSection 