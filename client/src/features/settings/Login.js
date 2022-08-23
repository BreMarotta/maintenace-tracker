import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DisperseInfo } from '../../Disperse'
import { Button, Background } from '../../Styles/Styled'
import { CenteredForm, FormBackground, FormBanner, AppLabel, ErrorLi } from '../../Styles/Form.style'

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
                handleLogin(data)
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
    <Background backgroundColor="gainsboro" image ="url('https://media.istockphoto.com/vectors/work-tools-pattern-of-hammer-screwdriver-spanner-vector-id1177622447?k=20&m=1177622447&s=612x612&w=0&h=VtiVLiAnbMUJKXQxwGcl2hq8XDN-pPOJQKiu1zWV6kU=')">
    <FormBackground backgroundColor="whitesmoke">
      <AppLabel main="darkslategray" >Maintenance Tracker Application <h5>by Breanne Marotta</h5></AppLabel>
            <CenteredForm onSubmit={handleSubmit}>
                <FormBanner main="darkslategray">Login:</FormBanner>
                <div>No account yet? <NavLink to='/signup' ><strong>Signup</strong></NavLink>!</div>
                <ErrorLi>{error}</ErrorLi>
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
                
                <Button type="submit" backgroundColor="darkslategray">Submit</Button>
            </CenteredForm>
            
        </FormBackground>
    </Background>
  )
}

export default Login
