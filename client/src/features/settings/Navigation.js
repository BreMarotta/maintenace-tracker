import React from 'react'
import { NavLink, useNavigation } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
        <NavLink to="/" className="">Home</NavLink>
        <NavLink to="/items" className="">Items</NavLink>
        <NavLink to="/repairs" className="">Repairs</NavLink>
        <NavLink to="/testing" className="">Test Route</NavLink>
    </div>
  )
}

export default Navigation