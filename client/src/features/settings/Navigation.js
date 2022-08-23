import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';
import { useDesign } from '../designs/useDesign';
import { DisperseInfo } from '../../Disperse';
import { StyledLink, Name, Button } from '../../Styles/Styled';

const Navigation = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const user = useSelector((state) => state.users.user)
  const design = useDesign(user)

  const navStyles = {
    backgroundImage: `url(${design.banner})`,
    padding: 5,
  }


  if (loggedIn){
    return (
      <div className="" style={navStyles}>
        <LogoutButton />
        <Name main={design.main} backgroundColor={design.background}>{design.company_name != "" ? design.company_name : user.username}</Name>
        <br/>
          <NavLink to="/"><StyledLink backgroundColor={design.main}>Home</StyledLink></NavLink>

          <NavLink to='/people'><StyledLink backgroundColor={design.main}>{design.members}</StyledLink></NavLink>
          <NavLink to="/items"><StyledLink backgroundColor={design.main}>Items</StyledLink></NavLink>
          <NavLink to="/repairs"><StyledLink backgroundColor={design.main}>Repairs</StyledLink></NavLink>
          
          <NavLink to="/locations" ><StyledLink backgroundColor={design.main}>Locations</StyledLink></NavLink>
          <NavLink to="/categories" ><StyledLink backgroundColor={design.main}>Categories</StyledLink></NavLink>
          <NavLink to='/settings' ><StyledLink backgroundColor={design.main}>⚙️ Settings</StyledLink></NavLink>
          
          
          <hr color={design.accent}/>
          <hr color={design.accent}/>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Navigation