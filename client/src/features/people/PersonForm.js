import React, { useState, useContext } from 'react'
import { CirclePicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { addPerson, updatePerson, updatePersonFront } from './peopleSlice';
import { DisperseInfo } from '../../Disperse';
import { Button } from '../../Styles/Styled';
import { CenteredForm } from '../../Styles/Form.style';
import { useDesign } from '../designs/useDesign';



const PersonForm = (props) => {
  const { loggedIn } = useContext(DisperseInfo)
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory()
  const design = useDesign()


 const n = (props.person !== undefined || null ? props.person.name : "")
 const t = (props.person !== undefined || null ? props.person.title : "")
 const c = (props.person !== undefined || null ? props.person.color : "")
 const current = (props.person !== undefined || null ? props.person.current : true)


  const [personObj, setPersonObj] = useState({
    name: n,
    title: t,
    color: c,
    current: current,
    id: params.id
  })

  const [toggleDisplay, setToggleDisplay] = useState(false)

  const toggle = () => {
      setToggleDisplay(!toggleDisplay)
  }


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
    if(props.toggle) {
      props.toggle();
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updatePerson(personObj))
    props.updatePerson(personObj)
    props.toggle()
  }

  // const buttonText = props.person !== undefined || null ? "Save" : "Save" 
  const submitFunction = props.person !== undefined || null ? handleUpdate : handleSubmit

  const toggleCurrent = () => {

    const newObj = {... personObj, current: !personObj.current}
    setPersonObj(newObj)
  }

  if (loggedIn){
  return (
    <CenteredForm onSubmit={submitFunction}>
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