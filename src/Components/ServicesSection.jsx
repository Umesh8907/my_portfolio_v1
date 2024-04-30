import React from "react";
import { services } from "../Constants/data";
const ServicesSection = () => {
  return (
    <div>
      <div className="lg:container w-[80%] mx-auto ">
        <h1 className="text-center font-bold text-4xl pt-8">My Services</h1>
        <h2 className="text-center pt-2 text-lg ">
          Explore what we offer to meet your needs
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 justify-items-center place-content-center gap-4 mt-10  pt-4 pb-4 ">
          {services.map((services) => (
            <div className="box flex flex-col justify-center items-center lg:p-4 p-2  bg-slate-100 rounded-xl ">
              <img
                className="lg:w-[80px] w-[40px] "
                src={services.icon}
                alt={services.title}
              />
              <h1 className=" font-medium pt-2">{services.title}</h1>
              <p className="text-center text-sm pt-2">{services.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
