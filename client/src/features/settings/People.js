import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Person from './Person'



const People = () => {
  const people = useSelector(state => state.people.people)
  const currentDesign = useSelector(state => state.design.design[0])
  
  const displayPeople = people.map(p => <Person key={p.id} person={p}/>)
  return (
    <div>
        {displayPeople}
    </div>
  )
}

export default People
