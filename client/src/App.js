import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./features/settings/Navigation";
import Home from "./features/settings/Home";
import Signup from "./features/settings/Signup";
import Login from "./features/settings/Login";

import { useDispatch, useSelector } from 'react-redux'
import { getMe } from './features/settings/ownersSlice'

function App() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.owners.loggedin);

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <BrowserRouter>
        <Navigation />
        <Switch />
          
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
