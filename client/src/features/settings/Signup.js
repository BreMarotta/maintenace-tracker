import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from './ownersSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.owners.errors);

  const errorLis = errors.map(e => <li key={e}>{e}</li>)

  const [userObj, setUserObj] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = (e) => {
    const newObj = {...userObj, [e.target.name]: e.target.value}
    setUserObj(newObj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(userObj))
    if (!errors) {

    } else {
      setUserObj({
        username: "",
        password: "",
        password_confirmation: ""
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