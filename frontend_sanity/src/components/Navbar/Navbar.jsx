import React from "react";

import logo from "../../assets/logo.png";
import "./Navbar.scss";


const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
