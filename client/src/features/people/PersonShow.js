import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonForm from './PersonForm';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Banner } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import Repairs from '../repairs/Repairs';

const PersonShow = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const params = useParams()
  const design = useDesign()
  const repairs = useSelector(state => state.repairs.repairs)

  const [person, setPerson] = useState({}) 
  const [color, setColor] = useState("")
  const [current, setCurrent] = useState(true)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [reps, setReps] = useState("")

  useEffect(() => {
    if(params.id != "new"){
    fetch(`/api/people/${params.id}`)
    .then(res => res.json())
    .then(data => {
      if (!data.error && !data.errors){
        setColor(data.color)
        setCurrent(data.current)
        setPerson(data)
        setError(false)
      } else{
        setError(true)
      }
      
    })
  }
  }, [])

  const toggle = () => {setShowForm(!showForm)}

  const updatePerson = (obj) => {
    setColor(obj.color)
    setCurrent(obj.current)
    setPerson(obj)
  }

  const display = showForm == true ? <PersonForm person={person} toggle={toggle} updatePerson={updatePerson}/> : 
  <div>
  <Banner  main={color ? color : "black"} opacity={current ? 1 : .85}>
    <p>{person.name}</p>
    <p>{person.title}</p>
    <p>{person.repair_sum == 0 ? "" : `Repair Cost Total: ${person.repair_sum}`}</p>
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
 if (loggedIn && !error && params.id != "new") {
  return (
    <div>
      <StyledBackground backgroundColor={design.background}>
        <div>{display}</div>
      </StyledBackground>
    </div>
  )
 } else if (error) {
  return (
    <div>
      <StyledBackground className="unauthorized"> <strong>Not Authorized - You do not have access to this information </strong></StyledBackground>
    </div>
  )} 
  // else if (!loggedIn){
  //   <Login />
  // }
  
}

export default PersonShow
