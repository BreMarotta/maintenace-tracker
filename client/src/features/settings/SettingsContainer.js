import React, { useState } from 'react'
import SettingsForm from './SettingsForm'
import DesignForm from '../designs/DesignForm'
import PersonForm from '../people/PersonForm'
import { useSelector } from 'react-redux';

const SettingsContainer = ({ toggle }) => {
  const loggedIn = useSelector((state) => state.users.loggedin);
  const [showSettings, setShowSettings] = useState(false)
  const [showPerson, setShowPerson] = useState(false)
  const [showDesign, setShowDesign] = useState(false)

  const toggleSettings = () => {
    setShowSettings(!showSettings)
  }

  const displaySettings = showSettings == true ? <SettingsForm /> : ""

  const toggleDesign = () => {
    setShowDesign(!showDesign)
  }

  const displayDesign = showDesign == true ? <DesignForm toggle={toggle}/> : ""

  const togglePerson = () => {
    setShowPerson(!showPerson)
  }

  const displayPerson = showPerson == true ? <PersonForm toggle={toggle}/> : ""
  
if (loggedIn == "true"){
  return (
    <div> 
      <h3>Settings:  </h3>
      <hr/>
      <label>User Settings: </label>
        <input
          type="checkbox"
          checked={showSettings}
          onChange={toggleSettings}/>
      {displaySettings}
      <hr/>
      <label>Personalize Design: </label>
        <input
            type="checkbox"
            checked={showDesign}
            onChange={toggleDesign}/>
      {displayDesign}
      <hr/>
      <label>Add : </label>
        <input
            type="checkbox"
            checked={showPerson}
            onChange={togglePerson}/>
      {displayPerson}
      
        
    </div>
    
  )} else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
  
}

export default SettingsContainer