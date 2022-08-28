import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PersonForm from './PersonForm';
import { useSelector, useDispatch } from 'react-redux';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Banner, EditButton, Button } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import Repairs from '../repairs/Repairs';
import Login from '../settings/Login';
import { deletePerson, deletePerFront } from './peopleSlice';

const PersonShow = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()
  const design = useDesign()

  const repairs = useSelector(state => state.repairs.repairs)


  const [person, setPerson] = useState({}) 
  const [color, setColor] = useState("")
  const [current, setCurrent] = useState(true)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [del, setDel] = useState(false)

  const has = repairs.find(x => x.person_id === person.id)

  useEffect(() => {
    if(params.id != "new"){
    fetch(`/api/people/${params.id}`)
    .then(res => res.json())
    .then(data => {
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

  const handleDelete = () => {
    console.log(person)
    dispatch(deletePerson(person))
    .then(data => {
      if(!data.payload.errors && !data.payload.error){
        dispatch(deletePerFront(person))
        history.push('/people')
      }
    })
  }

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
  : del ?
  <div>
  <Banner  main={color ? color : design.accent} opacity={current ? 1 : .85}>     
    <p>Are you sure you want to delete <strong>{person.name}</strong>?</p> 
    <Button backgroundColor="black" onClick={() => setDel(false)}>No</Button>
    <Button backgroundColor="black" onClick={handleDelete}>Confirm Delete</Button>
  </Banner>
  </div>
  :
  <div>
  <Banner  main={color ? color : design.accent} opacity={current ? 1 : .85}>      
  {has ? "" :<EditButton backgroundColor={color ? color : design.accent} accent="whitesmoke" side="right" onClick={() => setDel(!del)}>🗑️</EditButton>}
  <br/>
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
