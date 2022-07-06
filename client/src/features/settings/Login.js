import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DisperseInfo } from '../../Disperse'

const Login = () => {
    const { handleLogin } = useContext(DisperseInfo)
    const [error, setError] = useState("")

    const [userObj, setUserObj] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const newObj = {...userObj, [e.target.name]: e.target.value};
        setUserObj(newObj)
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (!data.error && !data.errors){
                handleLogin()
            } else {
                setUserObj({
                    username: "",
                    password: ""
                })
                setError(data.error)
            }
        })
    }



  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <h3>Log in to existing account: </h3>
            <label>Username: </label>
            <input 
                type="text"
                id="username"
                name="username"
                value={userObj.username}
                onChange={handleChange} />
                <br/>
            <label>Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                value={userObj.password}
                onChange={handleChange} />
                <br/>
                <input type="submit"/>
                <br/>
            {error}
        </form>
        <h5>No account yet? <NavLink to='/signup' ><strong>Signup</strong></NavLink>!</h5>
    </div>
  )
}

export default Login
