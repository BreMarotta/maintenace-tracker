import React, { useState, useContext } from 'react'
import SettingsForm from './SettingsForm'
import DesignForm from '../designs/DesignForm'
import PersonForm from '../people/PersonForm'
import { DisperseInfo } from '../../Disperse'
import { useDesign } from '../designs/useDesign'
import { StyledBackground } from '../../Styles/Styled'
import Login from './Login'

const SettingsContainer = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const [showSettings, setShowSettings] = useState(false)
  const [showPerson, setShowPerson] = useState(false)
  const [showDesign, setShowDesign] = useState(false)

  const toggleSettings = () => {
    setShowSettings(!showSettings)
  }

  const displaySettings = showSettings == true ? <SettingsForm toggle={toggleSettings}/> : ""

  const toggleDesign = () => {
    setShowDesign(!showDesign)
  }

  const displayDesign = showDesign == true ? <DesignForm toggle={toggleDesign}/> : ""

  const togglePerson = () => {
    setShowPerson(!showPerson)
  }

  const displayPerson = showPerson == true ? <PersonForm toggle={togglePerson}/> : ""
  
if (loggedIn ){
  return (
    <StyledBackground backgroundColor={design.background}> 
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
      
        
    </StyledBackground>
    
  )} else {
    return (
     <Login />
    )
  }
  
}

export default SettingsContainer