import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./features/settings/Navigation";
import Home from "./features/settings/Home";
import Signup from "./features/settings/Signup";
import Login from "./features/settings/Login";
import LogoutButton from "./features/settings/LogoutButton";

import { useDispatch } from 'react-redux'
import { getMe } from './features/settings/ownersSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <BrowserRouter>
    {/* <LogoutButton /> */}
        <Navigation />
        <Switch />
          <Route path="/signup" >
            <Signup />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>


    </BrowserRouter>
  );
}

export default App;
