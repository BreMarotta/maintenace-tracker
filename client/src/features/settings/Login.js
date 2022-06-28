import React, { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from './ownersSlice'

const Login = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userObj, setUserObj] = useState({
        username: "",
        password: ""
    })

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [errorsList, setErrorsList] = useState([])
    const handleChange = (e) => {

        const newObj = {
            ...userObj, [e.target.name]: e.target.value}
            setUserObj(newObj)
    }
 
    // console.log(userObj)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(logIn(userObj))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch(`/login`, {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({username, password }),
    //     })
    //     .then(res => res.json())
    //     .then(user => {
    //         if (!user.error){
    //             dispatch(setMe(user))
    //         } else {
    //             setUsername("")
    //             setPassword("")
    //             setErrorsList(user.error)
    //         }
    //     })
        // dispatch(setMe({username, password}))
    // }
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
            {/* {errorsList} */}
        </form>
    </div>
  )
}

export default Login
