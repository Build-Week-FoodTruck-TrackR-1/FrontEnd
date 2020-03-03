import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../images/logo-1.svg";
import "../components/Styles/NavStyle.scss";

const Navbar = () => {
  return (
    <header className="header-section">
      <div className="logo-con">
        {/* <img src={logo} alt="FoodTruck Logo" /> */}
      </div>

      <nav className="nav-bar">
        {/* <a href="#">Home</a>
        <a href="#">About Us</a> */}

        <NavLink to="/login" exact activeClassName="activeLink">
          Login
        </NavLink>
        <NavLink to="/" exact activeClassName="activeLink">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;