import React, { useState, useContext, useEffect } from 'react';
import { CirclePicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPerson, updatePerson, clearErrors } from './peopleSlice';
import { DisperseInfo } from '../../Disperse';
import { Button, StyledBackground } from '../../Styles/Styled';
import { CenteredForm, ErrorLi } from '../../Styles/Form.style';
import { useDesign } from '../designs/useDesign';

const PersonForm = (props) => {
  const { loggedIn } = useContext(DisperseInfo)
  const dispatch = useDispatch()
  const history = useHistory()
  const design = useDesign()
 
  const errors = useSelector(state => state.people.errors);

  const errorLis = errors ? errors.map(e => <ErrorLi key={e}>{e}</ErrorLi>) : ""

  const [personObj, setPersonObj] = useState({
    name: "",
    title: "",
    color: "",
    current: true,
    id: ""
  })

  useEffect(() => {
    if(props.person){
      setPersonObj(props.person)
    }
    dispatch(clearErrors())
  }, [])

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
    .then(data => {
      if (!data.payload.errors){
        if(props.toggle){
          props.toggle()
        }else{
          history.push('/people')
        }
      } 
    })    
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updatePerson(personObj))
    .then(data => {
      if (!data.payload.errors){
        props.updatePerson(personObj)
        props.toggle()
      }
    })
    
  }

  const submitFunction = props.person !== undefined || null ? handleUpdate : handleSubmit

  const toggleCurrent = () => {

    const newObj = {... personObj, current: !personObj.current}
    setPersonObj(newObj)
  }

  if (loggedIn){
  return (
    <StyledBackground>
      <CenteredForm onSubmit={submitFunction}>
        {errorLis}
        <label>Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={personObj.name}
            onChange={handleChange} />
          <br/>

        <label>Title:</label> 
          <input
            type="text"
            id="title"
            name="title"
            value={personObj.title}
            onChange={handleChange} />
          <br/>
          <br/>

        <label>Personalize Color:</label>
          <div>
            <CirclePicker
            color={personObj.color} 
            name="color" 
            onChange={(e) => handleColorChange("color", e.hex)} />
          </div>
          
              
          <br/>

        <label>Mark as inactive?</label>
          <input
            type="checkbox"
            checked={!personObj.current}
            onChange={toggleCurrent}/>
        

        <Button backgroundColor={design.accent}type="submit">Save</Button>
      </CenteredForm>
    </StyledBackground>
  )
} else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
}
export default PersonForm