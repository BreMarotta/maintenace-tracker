import React from 'react'
import { NavLink, useNavigation } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const loggedIn = useSelector((state) => state.owners.loggedin);
  console.log(loggedIn)

  const displayLogout = loggedIn == "true" ? <LogoutButton /> : console.log(loggedIn)

  return (
    <div className="">
      {displayLogout}
        <NavLink to="/" className="navigation">Home</NavLink>
        <NavLink to="/signup" className="navigation">Signup</NavLink>
        {/* <NavLink to="/repairs" className="navigation">Repairs</NavLink> */}
        <NavLink to="/login" className="navigation">Login</NavLink>
        
    </div>
  )
}

export default Navigation