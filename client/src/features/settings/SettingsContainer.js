import React from 'react'
import DesignForm from '../designs/DesignForm'
import PersonForm from '../people/PersonForm'

const SettingsContainer = ({ toggle }) => {
  return (
    <div>
      <PersonForm toggle={toggle}/>
      <DesignForm toggle={toggle}/>
        
    </div>
    
  )
}

export default SettingsContainer