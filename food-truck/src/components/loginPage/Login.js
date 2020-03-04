import React from "react";
import "../Styles/FormStyles.scss";
import { FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { Formik, Field, ErrorMessage, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import truckPic from "../../images/mexican-truck.png";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { login } from "../../actions";

const Login = props => {
  const handleLogin = data => {
    props.login(data);
  };

  return (
    <div className="main-form signup-div">
      <ScrollAnimation animateIn="fadeIn" className="form-img-div">
        <img src={truckPic} alt="coffee truck" />
      </ScrollAnimation>

      <Formik
        initialValues={{}}
        onSubmit={(data, { setSubmitting }) => {
          handleLogin(data);

          console.log(props.state);

          console.log(localStorage.getItem("state"));

          console.log(localStorage.getItem("state"));
          if (localStorage.getItem("state").currentUser.hasOwnProperty("id")) {
            localStorage.getItem("role") === "Operator"
              ? props.history.push("/operatordashboard")
              : props.history.push("/dinerdashboard");
          }
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <h2 className="form-title">Welcome Back</h2>
            <FormGroup>
              <Field
                atype="input"
                name="username"
                label="username"
                variant="outlined"
                fullWidth
                as={TextField}
              />
            </FormGroup>

            <FormGroup>
              <Field
                type="password"
                name="password"
                label="password"
                variant="outlined"
                fullWidth
                as={TextField}
              />
            </FormGroup>
            <Button type="submit">Login</Button>
            <FormGroup>
              Don't have an Account? {"  "}
              <Link to="/register" variant="body2">
                {`register`}
              </Link>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, { login })(withRouter(Login));