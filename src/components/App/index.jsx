import React, { useState,useEffect } from "react"; //
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import api from "../../api/labs";
import "./App.css";

 import Dashboard from "../Dashboard";
 import LearnerDashboard from "../LearnersDashboard";
 import ReviewerDashboard from "../ReviewerDashboard";

import Login from  "../Login";

function App()  {

   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
   useEffect(() => {
    
  }, [isLoggedIn, userType]);

const handleLogin = (token) => {

  localStorage.setItem("token", token);
  if (localStorage.getItem("token")) {
    setIsLoggedIn(true);
  }
};
const handleLogout = () => {
 
  localStorage.removeItem("token");
  if (!localStorage.getItem("token")) {
    setIsLoggedIn(false);
  }
};

const loginHandler = async (credentials) => {
  const request = {
    ...credentials
  };
  
  try {
    const response = await api.post('http://localhost:8080/api/auth/login', request, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response );
    
    localStorage.setItem("username", response.data.username);
    setUserType(response.data.userType.toLowerCase());
    handleLogin(response.data.token)
  } catch (error) {
    console.error(error);
  }
};
    

const PrivateRoute = ({ component: Component, isLoggedIn, onLogout, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} onLogout={onLogout} userType = {userType} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
return (
  <div className="ui container">
    <Router>
      <Switch>
        <Route
          path="/login"
          render={(props) =>
            isLoggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login {...props} loginHandler={loginHandler} onLogin={handleLogin} />
            )
          }
        />
    
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          userType={userType}
        />
        <PrivateRoute
          path="/learner"
          component={LearnerDashboard}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <PrivateRoute
          path="/reviewer"
          component={ReviewerDashboard}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  </div>
);

}

export default App;
