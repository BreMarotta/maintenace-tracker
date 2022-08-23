import React, { useState } from 'react';
import { StyledLi, EditButton } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import LocationForm from './LocationForm';
import Items from '../items/Items';

const Location = ({ location }) => {
  const design = useDesign()
  const [showForm, setShowForm] = useState(false)
  const [showItems, setShowItems] = useState(false)

  const toggle = () => {
    setShowForm(!showForm)
  }

  const display = showForm ? 
      <div>
        <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={toggle}>✎</EditButton>
        <LocationForm location={location} toggle={toggle}/>
      </div> 
    : showItems ? 
    <div>
      <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={() => setShowItems(!showItems)}>...</EditButton>
      <Items location={location}/>
    </div> 
    :
    <StyledLi backgroundColor={design.background}>
      <span>
        <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={() => setShowForm(!showForm)}>✎</EditButton>
        <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={() => setShowItems(!showItems)}>...</EditButton>
        <br/>
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