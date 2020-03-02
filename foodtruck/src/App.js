import React from "react";
import "./scss/App.scss";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/Login";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="inner-div">
        <Route
          exact
          path="/"
          render={props => {
            return <SignupForm {...props} />;
          }}
        ></Route>
        <Route
          exact
          path="/login"
          render={props => {
            return <LoginForm {...props} />;
          }}
        ></Route>
      </div>
    </div>
  );
}

export default App;
