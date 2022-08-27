import React, { useState } from 'react';
import { deleteLocation, clearLocErrors, deleteLocFront } from './locationsSlice';
import { StyledLi, EditButton } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import LocationForm from './LocationForm';
import { useSelector, useDispatch } from 'react-redux';
import Items from '../items/Items';
import { ErrorLi } from '../../Styles/Form.style';
import { Button, Banner } from '../../Styles/Styled';

const Location = ({ location }) => {
  const design = useDesign()
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false)
  const [showItems, setShowItems] = useState(false)
  const [del, setDel] = useState(false)
  const items = useSelector(state => state.items.items)
  const errors = useSelector(state => state.locations.errors)

  const errorLis = errors ? errors.map(e => <ErrorLi key={e}>{e}</ErrorLi>) : ""

  const has = items.find(x => x.location_id === location.id)

  const toggle = () => {
    setShowForm(!showForm)
  }

  const handleDelete = () => {
    console.log(location)
    dispatch(deleteLocation(location))
    .then(data => {
      // console.log(data)
      if(!data.payload.errors && !data.payload.error){
        dispatch(deleteLocFront(location))
      }
    })
  }
  
  const handleBack = () => {
    setDel(!del)
    dispatch(clearLocErrors())
  }

  const display = showForm ? 
    <div>
      <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={toggle}>✎</EditButton>
      <LocationForm location={location} toggle={toggle}/>
    </div> 
    : showItems ? 
    <div>
      <br/>
      <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={() => setShowItems(!showItems)}>...</EditButton>
      <Banner main={design.main}>{location.name}</Banner>
      <Items location={location} />
    </div> 
    : del ?
    <div><StyledLi backgroundColor={design.background}>
      <br/>
        <Banner main={design.main}>{location.name}</Banner>{errorLis ? errorLis : "To delete a location, there cannot be any items assigned to that location. Are you ready to delete?"}
        <br/><Button backgroundColor={design.main} onClick={handleBack}>Go Back</Button><Button backgroundColor={design.main} onClick={handleDelete}>Delete</Button>
      </StyledLi><br/></div>
    :
    <StyledLi backgroundColor={design.background}>
      <span>
        {has == undefined ? <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={() => setDel(!del)}>🗑️</EditButton> : <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={() => setShowItems(!showItems)}>...</EditButton>}
        <EditButton backgroundColor={design.background} accent={design.accent} side="left" onClick={() => setShowForm(!showForm)}>✎</EditButton>
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