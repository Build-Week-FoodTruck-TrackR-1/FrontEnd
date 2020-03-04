import React from "react";
import styled from "styled-components";
import {
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { addDiner } from "../../actions";
/* import uuid from "react-uuid"; */
import ScrollAnimation from "react-animate-on-scroll";
import { FormGroup } from "reactstrap";
import truckPicture from "../../images/truck2.png";
import "../Styles/FormStyles.scss";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiPaper-elevation1 {
    width: 95vw;
    min-height: 90vh;
    margin-top: 5vh;
    form {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-top: 5%;

      * {
        margin: 1% 0;
      }
      button {
        margin: 5% 0;
      }

      .MuiInput-underline {
        &:after {
          border-bottom: 2px solid red;
        }
      }

      .error {
        color: red;
        font-size: 50%;
        align-self: flex-start;
      }
    }
    #footer {
      position: fixed;
      bottom: 0;
      width: 95vw;
    }
  }
`;

const DinerSignUp = props => {
  return (
    <div className="main-form signup-div">
      <ScrollAnimation animateIn="fadeIn" className="form-img-div">
        <img src={truckPicture} alt="coffee truck" />
      </ScrollAnimation>
      <Formik
        initialValues={{}}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          props.addDiner({
            /*id: uuid(),*/
            Role: "Diner",
            /*favoriteTrucks: [],
            firstName: data.firstName,
            lastName: data.lastName,*/
            username: data.username,
            password: data.password,
            email: data.email,
            location: { lat: data.latitude, long: data.longitude }
          });

          props.history.push("/dinerdashboard");

          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className="signupForm">
            <h2 className="form-title">Create Your Account</h2>

            {/* <FormGroup>
              <Field
                label="First Name"
                name="firstName"
                type="input"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="firstName"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>

            <FormGroup>
              <Field
                placeholder="Last Name"
                name="lastName"
                type="input"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="lastName"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup> */}
            <FormGroup>
              <Field
                placeholder="Username"
                name="username"
                type="input"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="username"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                placeholder="Password"
                name="password"
                type="password"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="password"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                placeholder="Retype Password"
                name="password2"
                type="password"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="password2"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                placeholder="E-Mail"
                name="email"
                type="email"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="email"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                placeholder="Longitude"
                name="longitude"
                type="number"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="longitude"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                placeholder="Latitude"
                name="latitude"
                type="number"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="latitude"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                disabled={!!Object.keys(errors).length || isSubmitting || false}
              >
                Submit
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, { addDiner })(DinerSignUp);
