import React, { useState } from 'react'
import { CirclePicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { addPerson, updatePerson, updatePersonFront } from './peopleSlice';


const PersonForm = (props) => {
  const dispatch = useDispatch()
  const params = useParams()

 const n = (props.person !== undefined || null ? props.person.name : "")
 const t = (props.person !== undefined || null ? props.person.title : "")
 const c = (props.person !== undefined || null ? props.person.color : "")
 const current = (props.person !== undefined || null ? props.person.current : "")


  const [personObj, setPersonObj] = useState({
    name: n,
    title: t,
    color: c,
    current: current,
    id: params.id
  })

  const handleChange = (e) => {
    const newObj = {
      ...personObj,
      [e.target.name]: e.target.value
    }
    setPersonObj(newObj)
  }

  const handleColorChange = (name, color) => {
    const newObj = {
      ...personObj,
      [name]: color
    }
    setPersonObj(newObj)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("new")
    dispatch(addPerson(personObj))
    props.toggle()
    
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updatePerson(personObj))
    dispatch(updatePersonFront(personObj))
    props.updatePerson(personObj)
    props.toggle()
  }

  const buttonText = props.person !== undefined || null ? "Save Changes" : "Add Person" 
  const submitFunction = props.person !== undefined || null ? handleUpdate : handleSubmit

  const toggleCurrent = () => {
    const newObj = {... personObj, current: !personObj.current}
    setPersonObj(newObj)
  }

  return (
    <form className="personForm" onSubmit={submitFunction}>
      <label>Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={personObj.name}
          onChange={handleChange} />
        <br/>

      <label>Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={personObj.title}
          onChange={handleChange} />
        <br/>

        <label style={{color: 'white', background: "blue"}}>
                Color: 
          <CirclePicker 
            color={personObj.background} 
            name="color" 
            onChange={(e) => handleColorChange("color", e.hex)} />
          </label>    
          <br/>

        <label>Mark as inactive?</label>
          <input
            type="checkbox"
            checked={current}
            onChange={toggleCurrent}/>

        <button type="submit">{buttonText}</button>
    </form>
  )
}

export default PersonForm