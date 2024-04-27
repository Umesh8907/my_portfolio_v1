import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main shadow-md">
      <div className="container flex items-center justify-between ">
        <div className="logo">
          <Link to="/">
            <img className="w-[250px]" src="./images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="flex">
          <div className="menu flex gap-4 mx-8 items-center ">
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/tech"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Tech Stacks
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact Me
            </NavLink>
          </div>
          <div className="icons flex gap-2 mx-8">
          
          <img className="w-8" src="./icons/github.svg" alt="" />
          <img className="w-8" src="./icons/linkedin.svg" alt="" />
          <img className="w-8" src="./icons/twitter.svg" alt="" />
          
        </div>
        <button className="bg-slate-600 px-6 py-2 text-white  rounded-lg">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
