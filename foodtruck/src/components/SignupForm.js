import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { FormGroup, Button } from "reactstrap";
import { TextField } from "formik-material-ui";
import { Link } from "react-router-dom";
import "../scss/FormStyles.scss";

function SignupForm(props) {
  const [data, setData] = useState([]);
  const [pressed, setPressed] = useState(false);
  /*   const [userArray] = useState([]);
   */ /*   let isObjectEmpty = !Object.keys(data).length;
   */ console.log(props);
  useEffect(() => {
    props.status && setData(data => [...data, props.status]);
    /*     userArray.push(props.status);
     */
  }, [props.status]);
  /* useEffect(() => {
    !isObjectEmpty && userArray.push(data);
  }, [data]); */
  return (
    <div className="main-form signup-div">
      <Form>
        <h2 className="form-title">Create Your Account</h2>
        <FormGroup>
          <Field
            type="text"
            name="username"
            label="username"
            variant="filled"
            component={TextField}
            fullWidth
          />
        </FormGroup>

        <FormGroup>
          <Field
            type="text"
            name="password"
            label="password"
            component={TextField}
            fullWidth
            variant="filled"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Field
            type="password"
            name="passwordCorfirmation"
            label="confirm password"
            component={TextField}
            variant="filled"
            fullWidth
            securetextentry="true"
          />
        </FormGroup>
        <FormGroup>
          <Field
            type="text"
            name="email"
            label="Email Address"
            component={TextField}
            variant="filled"
            fullWidth
          />
        </FormGroup>
        <FormGroup>
          <Field as="select" name="select" className="form-control select">
            <option disabled value="initial">
              Account Type
            </option>
            <option value="vendor">Vendor</option>
            <option value="customer">Customer</option>
          </Field>
          {props.errors.select && pressed === true && (
            <p className="feedback">{props.errors.select}</p>
          )}
        </FormGroup>

        <Button
          type="submit"
          onClick={() => {
            setPressed(true);
          }}
        >
          Register
        </Button>
        <FormGroup>
          Have an Account? {"  "}
          <Link to="/login" variant="body2">
            {`Log in`}
          </Link>
        </FormGroup>
      </Form>

      {data.map(a => {
        return (
          <ul key={a.id}>
            <h3>ID: {a.id}</h3>
            <li>user name: {a.username}</li>
            <li>email: {a.email}</li>
            <li>password: {a.password}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    username: "",
    password: "",
    passwordCorfirmation: "",
    email: "",
    select: "initial" || ""
  }),
  validationSchema: yup.object().shape({
    username: yup
      .string()
      .required("user name is required")
      .max(14, "way too long")
      .min(4, "must be at least 5 characters"),
    password: yup
      .string()
      .required("please enter a password")
      .min(8, "mininum of 8 characters required"),
    passwordCorfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("confirmation required"),
    email: yup
      .string()
      .email("email must be valid")
      .required("must enter email"),
    select: yup.string().matches(/(vendor|customer)/, "please pick one")
  }),

  handleSubmit: (values, formikBag) => {
    console.log("submitting...", formikBag);

    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res);
        formikBag.setStatus(res.data);
        formikBag.resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SignupForm);
