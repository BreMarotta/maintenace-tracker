import React from 'react'
import DesignForm from './DesignForm';
import PersonForm from './PersonForm'

const SettingsContainer = ({ toggle }) => {
  return (
    <div>
        <DesignForm toggle={toggle}/>
        <PersonForm toggle={toggle}/>
    </div>
    
  )
}

export default SettingsContainer