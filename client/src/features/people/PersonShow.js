import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonForm from './PersonForm';

const PersonShow = () => {
  const params = useParams()
  const people = useSelector(state => state.people.people)
  const [person, setPerson] = useState({}) 
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(`/people/${params.id}`)
    .then(res => res.json())
    .then(data => {
      if (!data.error && !data.errors){
        setColor(data.color)
        setPerson(data)
        setError(false)
      } else{
        setError(true)
      }
      
    })
  }, [params])

  const toggle = () => {setShowForm(!showForm)}

  const displayUpdate = showForm == true ? <PersonForm person={person} toggle={toggle}/> : <div>
  <p>{person.name}</p>
  <p> Title: {person.title}</p>
</div>

 if (!error) {
  return (
    <div>
      <label>Update Person</label>
        <input
          type="checkbox"
          checked={showForm}
          onChange={toggle}/>
          {}
      <ul>
        <li style={{background: color}}>{displayUpdate}</li>
        <li>I eventually want to have this as a list of cards of this person's repairs</li>
        <li>Each card would be a link to that specific repair.</li>
        <li>This way a manager/company/parent could look at an overview of what each person/employee has contributed.</li>
        <li> Might be nice to also include a total expense for repairs by person? </li>
        <li> Might be nice to include charts or graphs of dates or somethings?</li>
      </ul>
    </div>
  )
 }
  return (
    <div>
      <h3 className="unauthorized"> Not Authorized - You do not have access to this person or their information </h3>
    </div>
  )
}

export default PersonShow
