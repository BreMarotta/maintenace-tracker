import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { designUpdate } from '../designs/designSlice';

const SettingsForm = () => {
    const dispatch = useDispatch()
    const errors = useSelector((state) => state.design.errors);
    const designInArray = useSelector(state => state.design.design[0])
    const designAsObj = useSelector(state => state.design.design)
    const currentDesign = designInArray == undefined ? designAsObj : designInArray
    
    const [settingsObj, setSettingsObj] = useState({
        id: currentDesign.id,
        company_name: currentDesign.company_name,
        members: currentDesign.members
    })

    const handleChange = (e) => {
        const newObj = {...settingsObj, [e.target.name]: e.target.value}
        setSettingsObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(designUpdate(settingsObj))
    }

  return (
    <div>
        <div>Please take a moment to set up some preferences for your Maintenance Tracker.</div>
        <div>These updates are available at all times under settings.</div>
        <form className="form" onSubmit={handleSubmit}>
            <label>Organization or Company Name:</label>
                <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    value={settingsObj.company_name}
                    onChange={handleChange}></input>
                    <br/>
                    <br/>
            <label>Type of People:</label>
            <div>On this site, you can include family members, employees, or other types of people who will be able to perform repairs.</div>
                <input 
                    type="text"
                    name="members"
                    id="members"
                    value={settingsObj.members}
                    onChange={handleChange}></input>
                    <br/>
            <button type="submit">Apply Changes</button>
        </form>
    </div>
  )
}

export default SettingsForm
