import React, { useState, useContext } from 'react';
import Login from '../settings/Login';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation, updateLocation } from './locationsSlice';
import { useHistory } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledBackground, Button } from '../../Styles/Styled';
import { Form, ErrorLi } from '../../Styles/Form.style';

const LocationForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch()
    const history = useHistory()
    const design = useDesign()
    const x = (props.location !== undefined || null ? props.location.id : "")
    const n = (props.location !== undefined || null ? props.location.name : "")
    const add_1 = (props.location !== undefined || null ? props.location.address : "")
    const add_2 = (props.location !== undefined || null ? props.location.address_2 : "")
    
    const [locationObj, setLocationObj] = useState({
        id: x,
        name: n,
        address: add_1,
        address_2: add_2
    })
    const errors = useSelector(state => state.locations.errors)
    const errorLis = errors ? errors.map(e => <ErrorLi key={e}>{e}</ErrorLi>) : ""

    const handleChange = (e) => {
        const newObj = {
            ...locationObj,
            [e.target.name]: e.target.value
        }
        setLocationObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addLocation(locationObj))
        .then(data => {
            if(!data.payload.errors){
                if(props.toggle) {
                    props.toggle()
                } else {  
                    history.push('/locations')
                }
            }
        })   
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateLocation(locationObj))
        .then(data => {
            if(!data.payload.errors){
                if(props.toggle) {
                    props.toggle()
                } else {  
                    history.push('/locations')
                }
            }
        })   
    }

    const buttonText = props.location !== undefined || null ? "Save Changes" : "Add Location"

    const submitFunction = props.location !== undefined || null ? handleUpdate : handleSubmit

    if (loggedIn){
    return (
        <StyledBackground backgroundColor={design.background}>
            <Form className="locationForm" onSubmit={submitFunction}>
            {errorLis}
                <label>Location Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={locationObj.name}
                        onChange={handleChange} />
                    <br/>
                <label>Street Address:</label> 
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={locationObj.address}
                        onChange={handleChange} />
                    <br/>
                <label>City, State, and Zipcode: </label> 
                    <input
                        type="text"
                        id="address_2"
                        name="address_2"
                        value={locationObj.address_2}
                        onChange={handleChange} />
                <br/>
                <Button backgroundColor={design.accent} type="submit">{buttonText}</Button>
            </Form> 
        </StyledBackground>
    )
} else {
    return (
      <Login />
    )
  } 
}

export default LocationForm
