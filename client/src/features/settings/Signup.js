import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse'
import { Button, Background } from '../../Styles/Styled';
import { CenteredForm, FormBackground, FormBanner, AppLabel, ErrorLi } from '../../Styles/Form.style';

const Signup = () => {
  const { handleLogin } = useContext(DisperseInfo)
  const [errorsList, setErrorsList] = useState([])

  const errorLis = errorsList.map(e => <ErrorLi key={e} color="red">{e}</ErrorLi>)

  const [userObj, setUserObj] = useState({
    user: {
      username: "",
      password: "",
      password_confirmation: "",
      designs_attributes: [{
        background: "#A9A9A9",
        main: "#483D8B",
        accent: "#FF7F50",
        banner: "https://media.istockphoto.com/vectors/work-tools-pattern-of-hammer-screwdriver-spanner-vector-id1177622447?k=20&m=1177622447&s=612x612&w=0&h=VtiVLiAnbMUJKXQxwGcl2hq8XDN-pPOJQKiu1zWV6kU=",
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
      handleLogin(data)
    } else {
      setUserObj({
        user: {
          username: "",
          password: "",
          password_confirmation: "",
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
      setErrorsList(data.errors)
    }})
    
  }

  return (
  <Background backgroundColor="gainsboro" image ="url('https://media.istockphoto.com/vectors/work-tools-pattern-of-hammer-screwdriver-spanner-vector-id1177622447?k=20&m=1177622447&s=612x612&w=0&h=VtiVLiAnbMUJKXQxwGcl2hq8XDN-pPOJQKiu1zWV6kU=')">
    <FormBackground backgroundColor="whitesmoke">
      <AppLabel main="darkslateblue" >Maintenance Tracker Application <h5>by Breanne Marotta</h5></AppLabel>
      <CenteredForm onSubmit={handleSubmit}>
        <FormBanner main="darkslateblue">Create new account: </FormBanner>
        <div>Already have an account? <NavLink to='/login' ><strong>Login</strong></NavLink>!</div>
        {errorLis}
        <label>Username: </label>
            <input 
                type="text"
                id="username"
                name="username"
                value={userObj.user.username}
                onChange={handleChange} />
                <br/>
            <label>Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                value={userObj.user.password}
                onChange={handleChange} />
                <br/>
              <label>Confirm Password: </label>
            <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={userObj.user.password_confirmation}
                onChange={handleChange} />
                <br/>
            <Button type="submit" backgroundColor="darkslateblue">Submit</Button>                

                       
      </CenteredForm>   
        
    </FormBackground>
  </Background>
  )
}

export default Signup