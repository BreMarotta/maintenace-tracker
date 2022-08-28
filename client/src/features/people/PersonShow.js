import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PersonForm from './PersonForm';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Banner, EditButton } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import Repairs from '../repairs/Repairs';
import Login from '../settings/Login';

const PersonShow = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const params = useParams()
  const design = useDesign()


  const [person, setPerson] = useState({}) 
  const [color, setColor] = useState("")
  const [current, setCurrent] = useState(true)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if(params.id != "new"){
    fetch(`/api/people/${params.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.error || data.errors){
        setError(true)
      } else{
        setColor(data.color)
        setCurrent(data.current)
        setPerson(data)
        setError(false) 
      } 
    })
  }
  }, [])
  console.log("error: ", error)

  const toggle = () => {setShowForm(!showForm)}

  const updatePerson = (obj) => {
    setColor(obj.color)
    setCurrent(obj.current)
    setPerson(obj)
  }

  const display = error ?
  <div>
    <StyledBackground> <strong>Not Authorized - You do not have access to this information </strong></StyledBackground>
  </div>
  : showForm ? 
    <PersonForm person={person} toggle={toggle} updatePerson={updatePerson}/> 
  :
  <div>
  <Banner  main={color ? color : "black"} opacity={current ? 1 : .85}>
    <p>{person.name}</p>
    <p>{person.title}</p>
    <p>{person.repair_sum == 0 ? "" : `Repair Cost Total: $${person.repair_sum}`}</p>
    <label>Update Information </label>
          <input
            type="checkbox"
            checked={showForm}
            onChange={toggle}/>        
          <hr/>
          
    </Banner>
    <StyledBackground backgroundColor={design.background}>
          <Repairs person={person}/>
    </StyledBackground>
  </div>

 if (loggedIn && params.id != "new") {
  return (
    <div>
      <StyledBackground backgroundColor={design.background}>
        {display}
      </StyledBackground>
    </div>
  )
 } else {
  return(
    <Login />
    )
  }
  
}

export default PersonShow
