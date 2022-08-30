import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LocationForm from './LocationForm';
import { useDispatch } from 'react-redux';
import { clearLocErrors } from './locationsSlice';

const LocationsDropDown = (props) => {
  const dispatch = useDispatch()
    const locations = useSelector(state => state.locations.locations)
    const [showForm, setShowForm] = useState(false)

    const dropDown = locations.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <LocationForm toggle={toggle}/> : ""
    
    const handleLocationSelect = (e) => {
      if(e.target.value == "add"){
        dispatch(clearLocErrors())
        setShowForm(true)
      }else{
        setShowForm(false)
        props.handleSelect("location_id", e.target.value)
      }
    }

    const d = (props.loc !== undefined || null ? props.loc : "")
  return (
    <div>
    <label>Location: </label>
        <select onChange={handleLocationSelect}>
            <option defaultValue={d}>Select From List</option>
            {dropDown}
            <option value="add" key="addLocation">Add Location</option>
        </select>
        {formFlag}
</div>
  )
}

export default LocationsDropDown