import React, { useState,useEffect } from "react"; //
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import api from "../../api/labs";
import "./App.css";
// import Header from "../Header";
// import AddContact from "../AddContact";
 import Dashboard from "../Dashboard";
// import ContactDetail from "../ContactDetail";
// import EditContact from "../EditContact";
import Login from  "../Login";

function App()  {
   //const [contacts, setContacts] = useState([]);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(() => {
    // This code will run whenever the value of isLoggedIn changes
    alert(isLoggedIn);
  }, [isLoggedIn]);
//   //RetrieveContacts
//   const retrieveContacts = async () => {
//     const response = await api.get("http://localhost:8080/contacts/");
//     return response.data;
//   };
const handleLogin = (token) => {
  // Store the token securely (e.g., in local storage or cookies)
  // Set isLoggedIn to true
  localStorage.setItem("token", token);
  if (localStorage.getItem("token")) {
    setIsLoggedIn(true);
  }
};
const handleLogout = () => {
  // Clear the stored token and user data
  // Set isLoggedIn to false
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
    
    handleLogin(response.data.token)
  } catch (error) {
    console.error(error);
  }
};
    
  // const addContactHandler = async (contact) => {
  //   contact.phone_numbers = contact.phone_numbers.split(",");
  //   for (let i = 0; i < contact.phone_numbers.length; i++) {
  //     contact.phone_numbers[i] = contact.phone_numbers[i].trim();
  //   }
  //   console.log(contact);


  //   const request = {
  //     ...contact
  //   };

  //   const response = await api.post("http://localhost:8080/contacts/", request);
  //   console.log(response);
  //   setContacts([...contacts, response.data]);
  // };
  // Custom PrivateRoute component to protect routes



const PrivateRoute = ({ component: Component, isLoggedIn, onLogout, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} onLogout={onLogout} />
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
          path="/"
          render={(props) =>
            isLoggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login {...props} loginHandler={loginHandler} onLogin={handleLogin} />
            )
          }
        />

      <Route
          path="/dashboard"
          render={(props) =>
            isLoggedIn ? (
              <Dashboard {...props} handleLogout={handleLogout} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        {/* <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        /> */}
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  </div>
);

}

export default App;
