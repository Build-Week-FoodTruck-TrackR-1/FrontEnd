import React from "react";
import styled from "styled-components";
import truckPicture from "../../images/coffee-truck.png";
import ScrollAnimation from "react-animate-on-scroll";
import { FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, Button, AppBar, Toolbar } from "@material-ui/core";
import "../Styles/FormStyles.scss";
import * as yup from "yup";
/* const Container = styled.section`
    width:  95%;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
    form {
        display: flex;
        flex-flow: column;
        align-items: center;       
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
    
`;
 */

const validationSchema = yup.object().shape({
<<<<<<< HEAD
  firstName: yup
=======
  /* firstName: yup
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
    .string()
    .required()
    .max(15),
  lastName: yup
    .string()
    .required()
<<<<<<< HEAD
    .max(30),
=======
    .max(30), */
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
  username: yup
    .string()
    .required()
    .max(15),
<<<<<<< HEAD
  businessName: yup.string().required(),
  password: yup.string().required(),
=======
  /*   businessName: yup.string().required(),
   */ password: yup.string().required(),
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
  email: yup.string().required()
});

const InitialForm = props => {
  return (
    <div className="main-form initial-div">
      <ScrollAnimation animateIn="fadeIn" className="form-img-div">
        <img src={truckPicture} alt="coffee truck" />
      </ScrollAnimation>
      <Formik
        initialValues={{}}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          props.submit({
            ...props.form,
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password,
            businessName: data.businessName,
            email: data.email
          });

          setSubmitting(false);
          props.step(4);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <h2 className="form-title">Create Your Account</h2>

<<<<<<< HEAD
            <FormGroup>
=======
            {/* <FormGroup>
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
              <Field
                label="First Name"
                name="firstName"
                type="input"
                fullWidth
                as={TextField}
              ></Field>

              <ErrorMessage
                name="firstName"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                label="Last Name"
                name="lastName"
                type="input"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="lastName"
                render={msg => <div className="error">{msg}</div>}
              />
<<<<<<< HEAD
            </FormGroup>
=======
            </FormGroup> */}
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
            <FormGroup>
              <Field
                label="Username"
                name="username"
                type="input"
                as={TextField}
                fullWidth
<<<<<<< HEAD
=======
                variant="outlined"
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
              ></Field>
              <ErrorMessage
                name="username"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                label="Password"
                name="password"
                type="password"
                as={TextField}
                variant="outlined"
                fullWidth
              ></Field>
              <ErrorMessage
                name="password"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                label="Retype Password"
                name="password2"
                type="password"
                as={TextField}
                variant="outlined"
                fullWidth
              ></Field>
              <ErrorMessage
                name="password2"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
            <FormGroup>
              <Field
                label="E-Mail"
                name="email"
                type="email"
                as={TextField}
                fullWidth
<<<<<<< HEAD
=======
                variant="outlined"
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
              ></Field>
              <ErrorMessage
                name="email"
                render={msg => <div className="error">{msg}</div>}
              />
            </FormGroup>
<<<<<<< HEAD
            <FormGroup>
=======
            {/* <FormGroup>
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
              <Field
                label="Bussiness Name"
                name="businessName"
                type="input"
                as={TextField}
                fullWidth
              ></Field>
              <ErrorMessage
                name="businessName"
                render={msg => <div className="error">{msg}</div>}
              />
<<<<<<< HEAD
            </FormGroup>
=======
            </FormGroup> */}
>>>>>>> 089800b992ffc3ec8d41aca9fe3935ca9bbcb950
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
export default InitialForm;
