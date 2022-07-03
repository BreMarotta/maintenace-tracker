import React from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const loggedIn = useSelector((state) => state.users.loggedin);

  const peopleType = useSelector((state) => state.users.user.type)
  const peopleLink = peopleType == "" ? "People" : peopleType

  const displayLogoutButton = loggedIn == "true" ? <LogoutButton /> : ""
  if (loggedIn == "true"){
    return (
      <div className="">
        {displayLogoutButton}
          <NavLink to="/" className="navigation">Home</NavLink>
          <NavLink to='/people' className="navigation">{peopleLink}</NavLink>
         
          <NavLink to="/locations" className="navigation">Locations</NavLink>
          <NavLink to="/categories" className="navigation">Categories</NavLink>
          {/* <NavLink to="/repairs" className="navigation">Repairs</NavLink> */}
          <NavLink to='/settings' style={{float: "right"}}><button>⚙️</button></NavLink>
          
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Navigation