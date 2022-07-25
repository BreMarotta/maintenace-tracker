import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';
import { useDesign } from '../designs/useDesign';
import { DisperseInfo } from '../../Disperse';
import { Button, ButtonLabel, StyledLink } from '../../Styles/Styled';

const Navigation = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const user = useSelector((state) => state.users.user)
  const design = useDesign(user)

  const navStyles = {
    backgroundImage: `url(${design.banner})`,
    padding: 25,
  }


  if (loggedIn){
    return (
      <div className="" style={navStyles}>
        <LogoutButton />
        <h1 style={{color: `${design.accent}`}}>{design.company_name}</h1>
          <NavLink to="/"><StyledLink backgroundColor={design.accent}>Home</StyledLink></NavLink>
          <NavLink to='/people'><StyledLink backgroundColor={design.accent}>{design.members}</StyledLink></NavLink>
         
          <NavLink to="/locations"><StyledLink backgroundColor={design.accent}>Locations</StyledLink></NavLink>
          <NavLink to="/categories"><StyledLink backgroundColor={design.accent}>Categories</StyledLink></NavLink>
          <NavLink to="/items"><StyledLink backgroundColor={design.accent}>Items</StyledLink></NavLink>
          <NavLink to="/repairs"><StyledLink backgroundColor={design.accent}>Repairs</StyledLink></NavLink>
          <NavLink to='/settings' style={{float: "right"}}><button>⚙️</button></NavLink>
          <Button backgroundColor={design.accent}>Test</Button>
          <Button backgroundColor={design.main}><ButtonLabel>Label Test</ButtonLabel></Button>
          <Button backgroundColor={design.background}>Test</Button>
          
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Navigation