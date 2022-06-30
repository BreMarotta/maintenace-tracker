import React, { useState } from 'react'
import { SwatchesPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { addPerson } from './peopleSlice';

const PersonForm = ({ toggle }) => {
  const dispatch = useDispatch()
  // const errors = useSelector((state) => state.people.errors)

  const [personObj, setPersonObj] = useState({
    name: "",
    title: "",
    color: ""
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
    dispatch(addPerson(personObj))
  }

  return (
    <form className="" onSubmit={handleSubmit}>
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
          <SwatchesPicker 
            color={personObj.background} 
            name="color" 
            onChange={(e) => handleColorChange("color", e.hex)} />
          </label>    
          <br/>

        <button type="submit">Add Person</button>
    </form>
  )
}

export default PersonForm