import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonForm from './PersonForm';
import { DisperseInfo } from '../../Disperse';

const PersonShow = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const params = useParams()
  // const people = useSelector(state => state.people.people)
  const [person, setPerson] = useState({}) 
  const [color, setColor] = useState("")
  const [current, setCurrent] = useState(true)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const peopleType = useSelector((state) => state.users.user.type)
  const peopleTypeName = peopleType == null ? "Person" : peopleType

  useEffect(() => {
    fetch(`/people/${params.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
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

  const updatePerson = (obj) => {
    setColor(obj.color)
    setPerson(obj)
  }

  const displayUpdate = showForm == true ? <PersonForm person={person} toggle={toggle} updatePerson={updatePerson}/> : <div>
  <p>{person.name}</p>
  <p> Title: {person.title}</p>
</div>

 if (loggedIn && !error) {
  return (
    <div>
      <label>Update {peopleTypeName}</label>
        <input
          type="checkbox"
          checked={showForm}
          onChange={toggle}/>
      <ul>
        <li style={{background: color}}>{displayUpdate}</li>
        <hr/>
        <li>I eventually want to have this as a list of cards of this person's repairs</li>
        <li>Each card would be a link to that specific repair.</li>
        <li>This way a manager/company/parent could look at an overview of what each person/employee has contributed.</li>
        <li> Might be nice to also include a total expense for repairs by person? </li>
        <li> Might be nice to include charts or graphs of dates or somethings?</li>
      </ul>
    </div>
  )
 } else if (error) {
  return (
    <div>
      <h3 className="unauthorized"> Not Authorized - You do not have access to this person or their information </h3>
    </div>
  )}
  
}

export default PersonShow
