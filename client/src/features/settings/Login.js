import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from './ownersSlice'

const Login = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(state => state.owners.error)
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
