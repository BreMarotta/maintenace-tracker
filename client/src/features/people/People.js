import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Person from '../people/Person'
import PersonForm from './PersonForm'
import { Redirect } from 'react-router-dom'


const People = () => {
  const loggedIn = useSelector((state) => state.users.loggedin);
  const people = useSelector(state => state.people.people)
  const currentDesign = useSelector(state => state.design.design[0])

  const [toggleDisplay, setToggleDisplay] = useState(false)

  const toggle = () => {
      setToggleDisplay(!toggleDisplay)
  }

  const displaySettingUpdates = toggleDisplay === true ? <div>
      <PersonForm toggle={toggle}/>
  </div> : people.map(p => <Person key={p.id} person={p}/>)

  if (loggedIn == "true") {
    return (
    <div>
        <label>Add Person</label>
          <input
            type="checkbox"
            checked={toggleDisplay}
            onChange={toggle} />

        {displaySettingUpdates}
    </div>

  )} else {
    return (
      <div>I can't get this to work</div>
    )
  }
  
}

export default People
