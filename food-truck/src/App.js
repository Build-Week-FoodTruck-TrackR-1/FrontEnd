import React, { useEffect } from "react";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import DinerDashboard from "./components/dinerDashboard/index";
import "./components/Styles/App.scss";
import OperatorDashboard from "./components/operatorDashboard/index";
import Login from "./components/loginPage/Login";
import RegisterChoice from "./components/RegisterChoice";
import TruckPage from "./components/trucksPage/index";
import SignupOperator from "./components/loginPage/signupOperator";
import DinerSignUp from "./components/loginPage/signupDiner";
import Navbar from "./components/Navbar";
import { rememberStateOnRefresh } from "./actions";

const GlobalStyle = createGlobalStyle`
`;

const OperatorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
     (localStorage.getItem("role")) === "Operator" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const DinerRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (localStorage.getItem("role")) === "Diner" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const TruckPageRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (localStorage.getItem("role")) === "Operator" ? (
        <Component {...props} />
      ) :(localStorage.getItem("role")) === "Diner" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const IndexRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (localStorage.getItem("role")) === "Operator" ? (
        <Redirect to="/operatordashboard" />
      ) :(localStorage.getItem("role")) === "Diner" ? (
        <Redirect to="/dinerdashboard" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const DinerDashboardRoute = ({ component: Component, ...rest}) => {
  return (<Route 
    {...rest}
    render={props => (localStorage.getItem("role")) === "Diner" ? (
      <Component {...props} />
    ) : (
      <Redirect to="/loginDiner" />
    )
  }
  />)
}

function App(props) {
  useEffect(() => {
    handleRefresh();
  }, []);

  const handleRefresh = () => {
    const state = JSON.parse(localStorage.getItem("state"));
    console.log(state);
    props.rememberStateOnRefresh(state);
    console.log(props.state);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="inner-div">
        <Reset />
        <GlobalStyle />

        <Switch>
          <DinerDashboardRoute path="/dinerdashboard" component={DinerDashboard} />
          {/* <IndexRoute exact path="/" component={Login} /> */}
          <Route exact path="/logindiner" component={Login} />
          <IndexRoute exact path="/register" component={RegisterChoice} />

          <DinerRoute path="/dinerdashboard" component={DinerDashboard} />
          <OperatorRoute
            path="/operatordashboard"
            component={OperatorDashboard}
          />
          <TruckPageRoute path="/truckpage/:id" component={TruckPage} />
          <Route
            path="/opsignup"
            render={props => <SignupOperator {...props} />}
          />
          <Route path="/dinersignup" component={DinerSignUp} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);

  return {
    state: state
  };
};

export default connect(mapStateToProps, { rememberStateOnRefresh })(App);
