import React, { useContext } from "react";
import "./App.css"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./features/settings/Navigation";
import Footer from "./features/settings/Footer";
import Home from "./features/settings/Home";
import Signup from "./features/settings/Signup";
import Login from "./features/settings/Login";
import SettingsContainer from "./features/settings/SettingsContainer";
import People from "./features/people/People"
import PersonForm from "./features/people/PersonForm";
import PersonShow from "./features/people/PersonShow";
import Categories from "./features/categories/Categories";
import CategoryForm from "./features/categories/CategoryForm";
import LocationForm from "./features/locations/LocationForm";
import Locations from "./features/locations/Locations";
import Items from "./features/items/Items";
import ItemForm from "./features/items/ItemForm";
import ItemShow from "./features/items/ItemShow";
import { DisperseInfo } from './Disperse'


function App() {
  const { loggedIn } = useContext(DisperseInfo)

  return (
    <BrowserRouter>
        <Navigation />
        <Switch />
          <Route path="/signup" >
            {loggedIn ? <Redirect to="/" /> : <Signup />}            
          </Route>
          <Route path="/login" > 
            {loggedIn ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/settings" >
           <SettingsContainer />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/people/new">
            <PersonForm />
          </Route>
          <Route path="/people/:id" >
            <PersonShow />
          </Route>
          <Route exact path="/categories" >
            <Categories />
          </Route>
          <Route exact path="/categories/new" >
            <CategoryForm />
          </Route>
          <Route exact path="/locations" >
            <Locations />
          </Route>
          <Route path="/locations/new" >
            <LocationForm />
          </Route>          
          <Route exact path="/items" >
            <Items />
          </Route>
          <Route exact path="/items/new" >
            <ItemForm />
          </Route>
          <Route path="/items/:id" >
            <ItemShow />
          </Route>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
