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

  const peopleType = useSelector((state) => state.users.user.type)
  const peopleLink = peopleType == "" ? "People" : peopleType

  const displayLogoutButton = loggedIn ? <LogoutButton /> : ""
  if (loggedIn){
    return (
      <div className="" style={navStyles}>
        {displayLogoutButton}
          <NavLink to="/" className="navigation">Home</NavLink>
          <NavLink to='/people' className="navigation">{peopleLink}</NavLink>
         
          <NavLink to="/locations" className="navigation">Locations</NavLink>
          <NavLink to="/categories" className="navigation">Categories</NavLink>
          <NavLink to="/items" className="navigation">Items</NavLink>
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