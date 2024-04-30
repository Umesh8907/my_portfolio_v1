import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="container md:flex pt-8 items-center">
      <div className="Heading flex-col md:w-1/2 mx-8">
        <h1 className="text-6xl font-extrabold mb-4">Hello, I'm <span className="text-5xl text-cyan-900">Umesh Tandon</span></h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          nobis iusto necessitatibus laboriosam nulla quae hic facere. Nam
          aliquam alias, non iste dolor accusamus sapiente nobis tempore nostrum
          officia. Incidunt doloremque nihil, sed mollitia quibusdam impedit
          illo vero maiores rem, omnis dignissimos voluptatem cumque, quis
          numquam molestias at inventore corporis.
        </p>
       <Button  title="Download My Resume"/>
      </div>
      <div className="Image">
        <img className="w-[650px]" src="./images/photo.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
