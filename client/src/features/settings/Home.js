import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const loggedIn = useSelector((state) => state.users.loggedin);
  const username = useSelector((state) => state.users.user.username)
  
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
          <ul>
            <li>Eventually, this will have instructions about how to properly use the site.</li>
            <li> Will also include quick links???</li>
          </ul>      
        </div>
    )
    }
}

export default Home