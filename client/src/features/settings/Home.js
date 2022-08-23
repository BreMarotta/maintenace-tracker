import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledBackground, StyledLi, Banner } from '../../Styles/Styled';
import Login from './Login'

const Home = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const user = useSelector((state) => state.users.user)

  
    if (!loggedIn){
      return (
        <Login />
      
      )
    } else {
    return (
        <StyledBackground backgroundColor={design.background}>
          <Banner main={design.main}>{design.company_name != "" ? design.company_name : user.username}</Banner>
          <ul>
            <StyledLi backgroundColor={design.main}><li>Eventually, this will have instructions about how to properly use the site.</li></StyledLi>
            <StyledLi backgroundColor={design.main}><li>Will also include quick StyledLinks???</li> </StyledLi>
          </ul>      
        </StyledBackground>
    )
    }
}

export default Home