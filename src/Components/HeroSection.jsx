import React from "react";

const HeroSection = () => {
  return (
    <div className="container lg:flex sm:flex-col pt-8 items-center">
      <div className="Heading flex-col">
        <h1 className="text-6xl font-extrabold mb-4">Hello, I'm Umesh Tandon</h1>
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
        <img className="w-[650px]" src="./images/photo.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
