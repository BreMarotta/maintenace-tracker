import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LocationForm from './LocationForm'

const LocationsDropDown = (props) => {
    const locations = useSelector(state => state.locations.locations)
    const [location, setLocation] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dropDown = locations.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <LocationForm toggle={toggle}/> : ""
    
    const handleLocationSelect = (e) => {
        e.target.value == "add" ? toggle() : props.handleSelect("location_id", e.target.value)
    }


  return (
    <div>
    <label>Location: </label>
        <select onChange={handleLocationSelect}>
            <option defaultValue={""}>Select From List</option>
            {dropDown}
            <option value="add" key="addLocation">Add Location</option>
        </select>
        {formFlag}
</div>
  )
}

export default LocationsDropDown