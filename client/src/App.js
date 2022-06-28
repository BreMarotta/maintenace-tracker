import React from "react";
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./features/settings/Navigation";
import Home from "./features/settings/Home";
import Signup from "./features/settings/Signup";
import Login from "./features/settings/Login";
import Auth from "./features/settings/Auth";

function App() {

  return (
    <BrowserRouter>
    <Auth />
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
