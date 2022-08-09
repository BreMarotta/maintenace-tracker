import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonForm from './PersonForm';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Banner, StyledLi } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const PersonShow = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const params = useParams()
  const design = useDesign()
  console.log(design)
  const [person, setPerson] = useState({}) 
  const [color, setColor] = useState("")
  const [current, setCurrent] = useState(true)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const peopleTypeName = design.members == null ? "Person" : design.members

  useEffect(() => {
    fetch(`/api/people/${params.id}`)
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

  const updatePerson = (obj) => {
    setColor(obj.color)
    setPerson(obj)
  }

  const displayUpdate = showForm == true ? <PersonForm person={person} toggle={toggle} updatePerson={updatePerson}/> : 
  <Banner  style={{background: color}}>
    <p>{person.name}</p>
    <p>{person.title}</p>
    <p>Repair Cost Total: </p>
  </Banner>

 if (loggedIn && !error) {
  return (
    <div>
      <StyledBackground backgroundColor={design.background}>
        <div>{displayUpdate}</div>
        
        <label>Update Information </label>
          <input
            type="checkbox"
            checked={showForm}
            onChange={toggle}/>        
          <hr/>
          
      </StyledBackground>
      <StyledBackground backgroundColor={design.background}>
        <p>Need to put a "Repairs Container" that holds the repairs of this person.</p>
      </StyledBackground>
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
