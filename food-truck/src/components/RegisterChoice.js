import React from "react";
import { Link } from "react-router-dom";
import "../components/Styles/RegisterChoiceStles.scss";
import chefImg from "../images/chef.png";
import dinerImg from "../images/diners.png";
import ScrollAnimation from "react-animate-on-scroll";

function RegisterChoice() {
  return (
    <div className="main-form">
      <div className="section">
        <ScrollAnimation animateIn="fadeIn">
          <img src={dinerImg} alt="diners" />
        </ScrollAnimation>

        <span className="link">
          <Link to="/dinersignup">Register as a Diner</Link>
        </span>
      </div>
      <div className="section">
        <ScrollAnimation animateIn="fadeIn">
          <img src={chefImg} alt="chef" />
        </ScrollAnimation>
        <span className="link">
          <Link to="/opsignup">Register as a Vendor</Link>
        </span>
      </div>
    </div>
  );
}

export default RegisterChoice;