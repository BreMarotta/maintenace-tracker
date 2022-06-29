import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SettingsContainer from './SettingsContainer';



const Home = () => {
  const loggedIn = useSelector((state) => state.owners.loggedin);
  const username = useSelector((state) => state.owners.user.username)

  const [toggleDisplay, setToggleDisplay] = useState(false)

  const toggle = () => {
      setToggleDisplay(!toggleDisplay)
  }

  const displaySettingUpdates = toggleDisplay === true ? <div>
      <SettingsContainer toggle={toggle}/>
  </div> : ""
  
    if (loggedIn != "true"){
      return (
        <div className="">
        <br/>
          Please 
          <NavLink to ='/login' ><strong>Login</strong></NavLink> 
          or 
          <NavLink to='/signup' ><strong>Signup</strong></NavLink>!
          </div>
      
      )
    } else {
    return (
        <div>
          <h1>Welcome {username}! </h1>
          <button onClick={toggle}>⚙️</button>
          {displaySettingUpdates}
          <ul>
            <li>Eventually, this will have instructions about how to properly use the site.</li>
            <li> Will also include quick links???</li>
          </ul>      
        </div>
    )
    }
}

export default Home