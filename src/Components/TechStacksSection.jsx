import React from "react";

const TechStacksSection = () => {
  return (
    <section className=" bg-[#F0F8FF] pb-20">
      <div className="container">
        <h1 className="text-center font-bold text-4xl pt-8">My Tech Stacks</h1>
        <h2 className="text-center pt-2 text-lg ">
          
          Technologies I’ve been working with recently
        </h2>
        <div className=" grid md:grid-cols-6 grid-cols-3 w-[80%] mx-auto gap-12  justify-items-center pt-8">
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/html.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/css.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/js.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/react.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/redux.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/git.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/sass.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/tail.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/vs.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/sup.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px] "
            src="./tech_icons/github.svg"
            alt="icons"
          />
          <img
            className="w-[80px] h-[80px]"
            src="./tech_icons/boots.svg"
            alt="icons"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStacksSection;
