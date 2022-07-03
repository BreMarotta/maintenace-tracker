import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './manageUsersSlice'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.users.errors)
    // console.log(error)

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
        dispatch(logIn(userObj))
        if (!errors) {

        } else {
            setUserObj({
                username: "",
                password: ""
            })           
        }
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
            {errors}
        </form>
        <h5>No account yet? <NavLink to='/signup' ><strong>Signup</strong></NavLink>!</h5>
    </div>
  )
}

export default Login
