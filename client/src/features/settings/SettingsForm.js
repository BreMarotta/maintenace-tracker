import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './manageUsersSlice';

const SettingsForm = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.users.user)
    // console.log("From Settings From: ", currentUser)
    const [settingsObj, setSettingsObj] = useState({
        type: "",
        company_name: "",
        // designs_attributes: [{
        //     background: currentUser.background,
        //     main: currentUser.main,
        //     accent: currentUser.accent,
        //     banner: currentUser.banner
        // }]
    })

    const handleChange = (e) => {
        const newObj = {...settingsObj, [e.target.name]: e.target.value}
        setSettingsObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(settingsObj))
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
                    name="type"
                    id="type"
                    value={settingsObj.type}
                    onChange={handleChange}></input>
                    <br/>
            <button type="submit">Apply Changes</button>
        </form>
    </div>
  )
}

export default SettingsForm
