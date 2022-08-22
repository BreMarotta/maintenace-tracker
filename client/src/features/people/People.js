import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Person from '../people/Person'
import { DisperseInfo } from '../../Disperse'
import { StyledBackground, Button, StyledLink } from '../../Styles/Styled'
import { useDesign } from '../designs/useDesign'
import Login from '../settings/Login'


const People = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const people = useSelector(state => state.people.people)

  const display = people.map(p => <Person key={p.id} person={p}/>)

  if (loggedIn) {
    return (
    <StyledBackground backgroundColor={design.background}>
        <Button backgroundColor={design.main}><Link to='/people/new'><StyledLink>Add Person</StyledLink></Link></Button>
        <br/>
        {display}
        
    </StyledBackground>

  )} else {
    return (
      <Login />
    )
  }
  
}

export default People
