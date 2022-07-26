import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledBackground, StyledLi, Banner } from '../../Styles/Styled';

const Home = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const username = useSelector((state) => state.users.user.username)
  
    if (!loggedIn){
      return (
        <div className="">
        <br/>
          Please 
          <NavLink to='/login' ><strong>Login</strong></NavLink> 
          or 
          <NavLink to='/signup' ><strong>Signup</strong></NavLink>!
          </div>
      
      )
    } else {
    return (
        <StyledBackground backgroundColor={design.background}>
          <Banner color={design.main} backgroundColor={design.background}> {username}: </Banner>
          <ul>
            <StyledLi><li>Eventually, this will have instructions about how to properly use the site.</li></StyledLi>
            <StyledLi><li>Will also include quick StyledLinks???</li> </StyledLi>
          </ul>      
        </StyledBackground>
    )
    }
}

export default Home