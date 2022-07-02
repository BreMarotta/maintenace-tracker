import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from './manageUsersSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.users.errors);
  // const currentDesign = useSelector(state => state.design.design[0])

  const errorLis = errors.map(e => <li key={e}>{e}</li>)

  const [userObj, setUserObj] = useState({
    user: {
      username: "",
      password: "",
      password_confirmation: "",
      type: "",
      designs_attributes: [{
        background: "#666666",
        main: "#0062B1",
        accent: "#A4DD00",
        banner: "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg"
      }] 
    }   
  })

  const handleChange = (e) => { 
    const newObj = {...userObj, user: {...userObj.user, [e.target.name]: e.target.value}}
    setUserObj(newObj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    dispatch(signUp(userObj))
    if (!errors) {

    } else {
      setUserObj({
        user: {
          username: "",
          password: "",
          password_confirmation: ""
        }
      })
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Create new account: </h3>
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
              <label>Confirm Password: </label>
            <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={userObj.password_confirmation}
                onChange={handleChange} />
                <br/>
                <input type="submit"/>
                <br/>
                <ul>{errorLis}</ul>           
      </form>      
    </div>
  )
}

export default Signup