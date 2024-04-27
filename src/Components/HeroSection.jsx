import React from "react";

const HeroSection = () => {
  return (
    <div className="container flex w-100 ">
      <div className="Heading">
        <h1>Hello, I'm Umesh Tandon</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          nobis iusto necessitatibus laboriosam nulla quae hic facere. Nam
          aliquam alias, non iste dolor accusamus sapiente nobis tempore nostrum
          officia. Incidunt doloremque nihil, sed mollitia quibusdam impedit
          illo vero maiores rem, omnis dignissimos voluptatem cumque, quis
          numquam molestias at inventore corporis.
        </p>
      </div>
      <div className="Image">
        <img className="w-[2000px]" src="./images/photo.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
