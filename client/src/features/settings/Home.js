import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const loggedIn = useSelector((state) => state.owners.loggedin);
  const username = useSelector((state) => state.owners.user.username)
  
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
        </div>
    )
    }
}

export default Home