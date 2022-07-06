import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import Person from '../people/Person'
import PersonForm from './PersonForm'
import { DisperseInfo } from '../../Disperse'


const People = () => {
  const { loggedIn } = useContext(DisperseInfo)
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
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
  
}

export default People
