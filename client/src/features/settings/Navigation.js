import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';
import { useDesign } from '../designs/useDesign';
import { DisperseInfo } from '../../Disperse';

const Navigation = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const user = useSelector((state) => state.users.user)
  const design = useDesign(user)

  const navStyles = {
    backgroundImage: `url(${design.banner})`,
    padding: 40,
  }

  const linkStyles = {
    backgroundColor: design.main,
    padding: 5,
    color: "white"
  }

  if (loggedIn){
    return (
      <div className="" style={navStyles}>
        <LogoutButton />
        <h1>{design.company_name}</h1>
          <NavLink to="/" className="navigation" style={linkStyles}>Home</NavLink>
          <NavLink to='/people' className="navigation" style={linkStyles}>{design.members}</NavLink>
         
          <NavLink to="/locations" className="navigation" style={linkStyles}>Locations</NavLink>
          <NavLink to="/categories" className="navigation" style={linkStyles}>Categories</NavLink>
          <NavLink to="/items" className="navigation" style={linkStyles}>Items</NavLink>
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