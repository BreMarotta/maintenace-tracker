import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./features/settings/Navigation";
import Home from "./features/settings/Home";
import Signup from "./features/settings/Signup";
import Login from "./features/settings/Login";
import People from "./features/people/People"
import PersonForm from "./features/people/PersonForm";
import PersonShow from "./features/people/PersonShow";
import Categories from "./features/categories/Categories";
import CategoryForm from "./features/categories/CategoryForm";
import LocationForm from "./features/locations/LocationForm";
import Locations from "./features/locations/Locations";
import { initDesign } from "./features/designs/designSlice";
import { initPeople } from "./features/people/peopleSlice";
import { initCategories } from './features/categories/categoriesSlice'
import { initLocations } from "./features/locations/locationsSlice";
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from './features/settings/manageUsersSlice'

function App() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.users.loggedin);
  const user = useSelector((state) => state.users.user)

  useEffect(() => {
    dispatch(getMe())
    .then((user)  => { 
      dispatch(initDesign(user.payload.designs))
      dispatch(initPeople(user.payload.people))
      dispatch(initCategories(user.payload.categories))
      dispatch(initLocations(user.payload.locations))
    })  
  }, [loggedIn]);

  //I'm trying to figure out how to use the getMe fetch to /me to lead to setting initial state in each slice each time the page loads.
  // useEffect(() => {
  //   dispatch(initDesign(user.designs));
  //   dispatch(initPeople(user.people));
  // }, [useSelector((state) => state.users.user)])

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
          <Route exact path="/people">
            <People />
          </Route>
          {/* <Route exact path="/people/new">
            <PersonForm />
          </Route> */}
          <Route path="/people/:id" >
            <PersonShow />
          </Route>
          <Route exact path="/categories" >
            <Categories />
          </Route>
          <Route path="/categories/new" >
            <CategoryForm />
          </Route>
          <Route path="/locations/new" >
            <LocationForm />
          </Route>
          <Route exact path="/locations" >
            <Locations />
          </Route>


    </BrowserRouter>
  );
}

export default App;
