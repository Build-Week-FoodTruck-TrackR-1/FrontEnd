import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/truck-logo.png";
import "../components/Styles/NavStyle.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Navbar = () => {
  return (
    <header className="header-section">
      <ScrollAnimation
        offset={0}
        animateIn="fadeInLeft"
        animateOnce="true"
        className="logo-con"
      >
        <img className="logo-img" src={logo} alt="FoodTruck Logo" />
      </ScrollAnimation>

      <nav className="nav-bar">
        <a href="#">Home</a>
        <a href="#">About Us</a>

        <NavLink to="/" exact activeClassName="activeLink">
          Login
        </NavLink>
        <NavLink to="/register" exact activeClassName="activeLink">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;