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

<<<<<<< HEAD
export default RegisterChoice;
=======
export default RegisterChoice;
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
