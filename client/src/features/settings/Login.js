import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './ownersSlice'

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.owners.errors)
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
        if (!error) {
            // console.log("no error, but history not working????")
            // history.push('/');
            
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
            {error}
        </form>
    </div>
  )
}

export default Login
