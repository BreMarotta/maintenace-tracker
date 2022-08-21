import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Person from '../people/Person'
import PersonForm from './PersonForm'
import { DisperseInfo } from '../../Disperse'
import { StyledBackground, Button } from '../../Styles/Styled'
import { useDesign } from '../designs/useDesign'
import Login from '../settings/Login'


const People = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const people = useSelector(state => state.people.people)

  // const [toggleDisplay, setToggleDisplay] = useState(false)

  // const toggle = () => {
  //     setToggleDisplay(!toggleDisplay)
  // }

  const display = people.map(p => <Person key={p.id} person={p}/>)

  if (loggedIn) {
    return (
    <StyledBackground backgroundColor={design.background}>
        <Button backgroundColor={design.main}><Link to='/people/new'>Add Person</Link></Button>
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
