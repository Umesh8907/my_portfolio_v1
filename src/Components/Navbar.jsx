import React from "react";

const Navbar = () => {
  return (
    <div className="main shadow-lg">
      <div className="container flex items-center justify-between ">
        <div className="logo">
          <img className="w-[250px]" src="./images/logo.png" alt="logo" />
        </div>
        <div className="menu"></div>
        <div className="icons"></div>
      </div>
    </div>
  );
};

export default Navbar;
