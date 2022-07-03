import React from 'react'
import SettingsForm from './SettingsForm'
import DesignForm from '../designs/DesignForm'
import PersonForm from '../people/PersonForm'

const SettingsContainer = ({ toggle }) => {
  return (
    <div>
      <SettingsForm />
      <hr/>
      <br/>
      <br/>
      <br/>
      <br/>
      <PersonForm toggle={toggle}/>
      <hr/>
      <DesignForm toggle={toggle}/>
        
    </div>
    
  )
}

export default SettingsContainer