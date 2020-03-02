import React from "react";
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DinerDashboard from './components/dinerdashboard/index';
import OperatorDashboard from "./components/operatordashboard/index";
import TruckPage from './components/truckpage/index';
import SignupOperator from './components/signup/signupoperator';
import { rememberStateOnRefresh } from './actions';
import "./components/Styles/App.scss";
import SignupForm from "./components/loginPage/SignupForm";
import LoginForm from "./components/loginPage/Login";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
`;

const OperatorRoute = ({ component: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    JSON.parse(localStorage.getItem('role')) === "Operator" ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
    }
    />
);

const DinerRoute = ({ component: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    JSON.parse(localStorage.getItem('role')) === "Diner" ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
    }
    />
);

const TruckPageRoute = ({ component: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    JSON.parse(localStorage.getItem('role')) ===  "Operator" ? (
      <Component {...props} /> 
    ) : (
    JSON.parse(localStorage.getItem('role')) === "Diner") ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
    }
    />
);

const IndexRoute = ({ component: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    JSON.parse(localStorage.getItem('role')) ===  "Operator" ? (
      <Redirect to="/operatordashboard" />
    ) : (
    JSON.parse(localStorage.getItem('role')) === "Diner") ? (
      <Redirect to="dinerdashboard" />
    ) : (
      <Component {...props} />
    )
    }
    />
);

function App(props) {
  useEffect( () => {
    handleRefresh();
  },[]);

  const handleRefresh = () => {

    const state = JSON.parse(localStorage.getItem('state'));
    console.log(state);
    props.rememberStateOnRefresh(state);
    console.log(props.state);
  }

  return (
    <div className="App">
      <Reset />
      <GlobalStyle />

      <Switch>
        <IndexRoute exact path="/" component={LoginForm} />
        <DinerRoute path="/dinerdashboard" component={DinerDashboard} />
        <OperatorRoute path="/operatordashboard" component={OperatorDashboard} />
        <TruckPageRoute path="/truckpage/:id" component={TruckPage} /> 
        <Route path ="/opsignup" render ={ props => (<SignupOperator {...props}/>)} />
        <Route path="/dinersignup" component={SignupForm} />
      </Switch>
          
    </div>
  );
}

const mapStateToProps = state => {

  console.log(state);

  return{
    state : state
  }
}
// return (
//   <div className="App">
//     <Navbar />

//     <div className="inner-div">
//       <Route
//         exact
//         path="/"
//         render={props => {
//           return <SignupForm {...props} />;
//         }}
//       ></Route>
//       <Route
//         exact
//         path="/login"
//         render={props => {
//           return <LoginForm {...props} />;
//         }}
//       ></Route>
//     </div>
//   </div>
// );


export default connect(mapStateToProps, { rememberStateOnRefresh })(App);
