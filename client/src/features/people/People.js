import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import Person from '../people/Person'
import PersonForm from './PersonForm'
import { DisperseInfo } from '../../Disperse'
import { StyledBackground, Button } from '../../Styles/Styled'
import { useDesign } from '../designs/useDesign'


const People = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const people = useSelector(state => state.people.people)
  const currentDesign = useSelector(state => state.design.design[0])

  const [toggleDisplay, setToggleDisplay] = useState(false)

  const toggle = () => {
      setToggleDisplay(!toggleDisplay)
  }

  const displaySettingUpdates = toggleDisplay === true ? <div>
      <PersonForm toggle={toggle}/>
  </div> : people.map(p => <Person key={p.id} person={p}/>)

  if (loggedIn) {
    return (
    <StyledBackground backgroundColor={design.background}>
        <Button backgroundColor={design.main} onClick={toggle}>Add Person</Button>
        <br/>
        {displaySettingUpdates}
        
    </StyledBackground>

  )} else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
  
}

export default People
