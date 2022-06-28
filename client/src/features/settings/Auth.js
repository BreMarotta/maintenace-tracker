import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMe, logOut } from './ownersSlice'
import Login from './Login'

const Auth = () => {
    const dispatch = useDispatch()
    const loggedInUser = useSelector((state) => state.owners.user);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);


    const handleLogin = () => {

    }

    console.log("LoggedIn: ", loggedInUser)


    const login = () => {

    }
 
    const handleLogOut = () => {
        dispatch(logOut())
    }
    // const handleLogout = () => {
    //    fetch(`/logout`, {
    //     method: "DELETE",
    //     headers: {"Content-Type": "application/json"}
    //    })
    //    .then(() => {
    //     dispatch(logout("logout"))
    //    })
    // }
    
    const signup = () => {

    }
  return (
    <div>
        <button onClick={() => dispatch(logOut())}>Logout</button>
        Auth
        </div>
  )
}

export default Auth
