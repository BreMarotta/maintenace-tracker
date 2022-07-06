import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation, updateLocation } from './locationsSlice';
import { useHistory } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';

const LocationForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch()
    const history = useHistory()
    const n = (props.location !== undefined || null ? props.location.name : "")
    const add_1 = (props.location !== undefined || null ? props.location.address : "")
    const add_2 = (props.location !== undefined || null ? props.location.address_2 : "")
    
    const [locationObj, setLocationObj] = useState({
        name: n,
        address: add_1,
        address_2: add_2
    })
    const errors = useSelector(state => state.locations.errors)
    const errorLis = errors.map(e => <li key={e}>{e}</li>)
    
    const [toggleAddress, setToggleAddress] = useState(false)

    const toggle = () => {setToggleAddress(!toggleAddress)}

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
        if(props.toggle) {
            props.toggle()
        } else {  
            history.push('/locations')
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateLocation(locationObj))
        // dispatch(updateLocationFront(locationObj))
    }

    const buttonText = props.location !== undefined || null ? "Save Changes" : "Add Location"

    const submitFunction = props.category !== undefined || null ? handleUpdate : handleSubmit

    if (loggedIn == "true"){
    return (
        <div>
            <form className="locationForm" onSubmit={submitFunction}>
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
                <button type="submit">{buttonText}</button>
            </form> 
            {errorLis}
        </div>
    )
} else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
  
}

export default LocationForm
