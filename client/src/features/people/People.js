import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Person from '../people/Person'
import PersonForm from './PersonForm'

const People = () => {
  const people = useSelector(state => state.people.people)
  const currentDesign = useSelector(state => state.design.design[0])
  
  const displayPeople = people.map(p => <Person key={p.id} person={p}/>)

  const [toggleDisplay, setToggleDisplay] = useState(false)

  const toggle = () => {
      setToggleDisplay(!toggleDisplay)
  }

  const displaySettingUpdates = toggleDisplay === true ? <div>
      <PersonForm toggle={toggle}/>
  </div> : ""
  return (
    <div>
        
        <button onClick={toggle}>Add Person</button>

        {displaySettingUpdates}
        {displayPeople}
    </div>

  )
}

export default People
