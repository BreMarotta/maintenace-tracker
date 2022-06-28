import React from 'react'
import { NavLink, useNavigation } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="">
        <NavLink to="/" className="navigation">Home</NavLink>
        <NavLink to="/signup" className="navigation">Signup</NavLink>
        {/* <NavLink to="/repairs" className="navigation">Repairs</NavLink> */}
        <NavLink to="/login" className="navigation">Login</NavLink>
        
    </div>
  )
}

export default Navigation