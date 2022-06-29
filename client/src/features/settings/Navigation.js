import React from 'react'
import { NavLink, useNavigation } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const loggedIn = useSelector((state) => state.owners.loggedin);

  const displayLogoutButton = loggedIn == "true" ? <LogoutButton /> : ""

  return (
    <div className="">
      {displayLogoutButton}
        <NavLink to="/" className="navigation">Home</NavLink>
        {/* <NavLink to="/repairs" className="navigation">Repairs</NavLink> */}
        
    </div>
  )
}

export default Navigation