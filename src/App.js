import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import OurPortfolio from './Components/OurPortfolio/OurPortfolio';
import OurTeam from './Components/OurTeam/OurTeam';
import ContactUs from './Components/ContactUs/ContactUs';
import LogInSignUp from './Components/LogInSignUP/LogInSignUp';
import SpecificUser from './Components/SpecificUser/SpecificUser';
import Admin from './Components/Admin/Admin';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/portfolio">
            <OurPortfolio></OurPortfolio>
          </Route>
          <Route path="/team">
            <OurTeam></OurTeam>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/logSign">
            <LogInSignUp></LogInSignUp>
          </Route>
          <PrivateRoute path="/user">
            <SpecificUser></SpecificUser>
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/*">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
