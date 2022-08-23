import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { StyledLi, EditButton } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import LocationForm from './LocationForm';

const Location = ({ location }) => {
  const design = useDesign()
  const history = useHistory()
  const [showForm, setShowForm] = useState(false)

  const toggle = () => {
    setShowForm(!showForm)
  }

  const display = showForm ? 
    <div>
      <EditButton backgroundColor={design.background} accent={design.accent} onClick={toggle}>✎</EditButton>
      <LocationForm location={location} toggle={toggle}/>
    </div> 
    : 
    <StyledLi backgroundColor={design.background}>
      <span>
        <EditButton backgroundColor={design.background} accent={design.accent} onClick={() => setShowForm(!showForm)}>✎</EditButton>
        {location.name} 
        <br/>
        {location.address} 
        <br/>
        {location.address_2}
        <hr/>
      </span>
    </StyledLi>

  return (
    <div>{display}</div>
      
        
    
  )
}
 export default Location