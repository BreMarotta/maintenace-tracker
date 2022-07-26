import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse'
import { Form, StyledBackground } from '../../Styles/Styled';

const Signup = () => {
  const { handleLogin } = useContext(DisperseInfo)
  const [errorsList, setErrorsList] = useState([])

  const errorLis = errorsList.map(e => <li key={e}>{e}</li>)

  const [userObj, setUserObj] = useState({
    user: {
      username: "",
      password: "",
      password_confirmation: "",
      type: "",
      company_name: "",
      designs_attributes: [{
        background: "#666666",
        main: "#0062B1",
        accent: "#A4DD00",
        banner: "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg",
        company_name: "",
        members: "Members"
      }] 
    }   
  })

  const handleChange = (e) => { 
    const newObj = {...userObj, user: {...userObj.user, [e.target.name]: e.target.value}}
    setUserObj(newObj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (!data.errors) {
      handleLogin()
    } else {
      setErrorsList(data.errors)
      setUserObj({
        user: {
          username: "",
          password: "",
          password_confirmation: ""
        }
      })
    }})
    
  }

  return (
    <StyledBackground backgroundColor="white">
      <Form onSubmit={handleSubmit}>
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
      </Form>   
      <h5>Already have an account? <NavLink to='/login' ><strong>Login</strong></NavLink>!</h5>   
    </StyledBackground>
  )
}

export default Signup