import React from 'react'
import DesignForm from './DesignForm';
import PersonForm from './PersonForm'

const SettingsContainer = ({ toggle }) => {
  return (
    <div>
      <PersonForm toggle={toggle}/>
      <DesignForm toggle={toggle}/>
        
    </div>
    
  )
}

export default SettingsContainer