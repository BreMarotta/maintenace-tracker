import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./features/settings/Navigation";
import Home from "./features/settings/Home";
import Signup from "./features/settings/Signup";
import Login from "./features/settings/Login";
import { userLoggedIn } from "./features/settings/designSlice";

import { useDispatch, useSelector } from 'react-redux'
import { getMe } from './features/settings/manageUsersSlice'
import { designBase } from './features/settings/designSlice'

function App() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.users.loggedin);
  const userDesigns = useSelector((state) => state.users.user.designs)
  // console.log("with useSelector: ", userDesign)

  useEffect(() => {
    dispatch(getMe());
    // console.log("User from useSelector: ", user.designs[0])
    dispatch(userLoggedIn(userDesigns));
  }, [loggedIn]);

  return (
    <BrowserRouter>
        <Navigation />
        <Switch />
          <Route path="/signup" >
            {loggedIn == "true" ? <Redirect to="/" /> : <Signup />}
            
          </Route>
          <Route path="/login" > 
            {loggedIn == "true" ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>


    </BrowserRouter>
  );
}

export default App;
