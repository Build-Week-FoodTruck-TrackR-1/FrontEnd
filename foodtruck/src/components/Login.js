import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { FormGroup, Button } from "reactstrap";
import { TextField } from "formik-material-ui";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const [data, setData] = useState([]);
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
    <div className="main-form">
      <Form>
        <h2 className="form-title">Welcome Back</h2>
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

        <Button type="submit">Login</Button>
        <FormGroup>
          Don't have an Account? {"  "}
          <Link to="/" variant="body2">
            {`register`}
          </Link>
        </FormGroup>
      </Form>

      {data.map(a => {
        return (
          <ul key={a.id}>
            <h3>ID: {a.id}</h3>
            <li>user name: {a.username}</li>
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
    password: ""
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
      .min(8, "mininum of 8 characters required")
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
})(LoginForm);
