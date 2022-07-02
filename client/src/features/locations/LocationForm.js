import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation } from './locationsSlice';

const LocationForm = () => {
    const loggedIn = useSelector(state => state.users.loggedIn);
    const dispatch = useDispatch()
    const [locationObj, setLocationObj] = useState({
        name: "",
        address: "",
        address_2: ""
    })
    const errors = useSelector(state => state.locations.errors)
    const [toggleAddress, setToggleAddress] = useState(false)

    const toggle = () => {setToggleAddress(!toggleAddress)}

    const errorLis = errors.map(e => <li key={e}>{e}</li>)

    const handleChange = (e) => {
        const newObj = {
            ...locationObj,
            [e.target.name]: e.target.value
        }
        setLocationObj(newObj)
    }

    const displayAddressLines = toggleAddress == true ? <div>
        <label>Street Address: </label>
            <input
                type="text"
                id="address"
                name="address"
                value={locationObj.address}
                onChange={handleChange} />
            <br/>
        <label>City, State, and Zipcode </label>
            <input
                type="text"
                id="address_2"
                name="address_2"
                value={locationObj.address_2}
                onChange={handleChange} />
            <br/>
    </div> : ""

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addLocation(locationObj))
    }
if (loggedIn == true){
    return (
        <div>Not Logged In!</div>
        
    )
} else {
    return (
        <div>
            <form className="locationForm" onSubmit={handleSubmit}>
                <label>Location Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={locationObj.name}
                        onChange={handleChange} />
                    <br/>
                <label>Include Address ?</label>
                    <input
                        type="checkbox"
                        checked={toggleAddress}
                        onChange={toggle} />
                {displayAddressLines}
                <br/>
                <button type="submit">Add Location</button>
            </form> 
            {errorLis}
        </div>
    )
}
  
}

export default LocationForm
