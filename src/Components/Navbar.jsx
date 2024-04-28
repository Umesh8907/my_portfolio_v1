import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="main shadow-md top-0 sticky bg-white z-50">
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
                isPending ? "pending " : isActive ? "" : ""
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/tech"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" :  ""
              }
            >
              Tech Stacks
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Contact Me
            </NavLink>
          </div>
          <div className="icons flex gap-2 mx-8">
          
          <img className="w-8" src="./icons/github.svg" alt="github" />
          <img className="w-8" src="./icons/linkedin.svg" alt="linkedin" />
          <img className="w-8 " src="./icons/twitter.svg" alt="twitter" />
          
        </div>
        <Button title="Hire Me"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
