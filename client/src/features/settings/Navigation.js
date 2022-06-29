import React from 'react'
import { NavLink, useNavigation } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const loggedIn = useSelector((state) => state.owners.loggedin);

  const displayLogoutButton = loggedIn == "true" ? <LogoutButton /> : ""
  if (loggedIn == "true"){
    return (
      <div className="">
        {displayLogoutButton}
          <NavLink to="/" className="navigation">Home</NavLink>
          {/* <NavLink to="/repairs" className="navigation">Repairs</NavLink> */}
          
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Navigation