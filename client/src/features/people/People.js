import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Person from '../people/Person'
import { DisperseInfo } from '../../Disperse'
import { StyledBackground, Button, StyledLink } from '../../Styles/Styled'
import { useDesign } from '../designs/useDesign'
import Login from '../settings/Login'
import { PersonGrid } from '../../Styles/Cards.style'


const People = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const people = useSelector(state => state.people.people)

  const display = people.map(p => <Person key={p.id} person={p}/>)

  if (loggedIn) {
    return (
    <StyledBackground backgroundColor={design.background}>
        <Link to='/people/new'><StyledLink><Button backgroundColor={design.main}>Add Person</Button></StyledLink></Link>
        <br/>
        <PersonGrid>
        {display}
        </PersonGrid>
    </StyledBackground>

  )} else {
    return (
      <Login />
    )
  }
  
}

export default People
