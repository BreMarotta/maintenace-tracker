import React, { useState } from 'react'
import SettingsForm from './SettingsForm'
import DesignForm from '../designs/DesignForm'
import PersonForm from '../people/PersonForm'

const SettingsContainer = ({ toggle }) => {
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
    
  )
}

export default SettingsContainer