import React, { useContext} from 'react'
import { useDispatch } from 'react-redux'
import { DisperseInfo } from '../../Disperse';
import { Button } from '../../Styles/Styled';

const LogoutButton = () => {
    const { handleLogout } = useContext(DisperseInfo)

    const logout = () => {
      fetch('/logout', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      })
      .then(res => handleLogout())
    }   

  return (
    <div>
        <Button onClick={logout} style={{float: "right"}}>Logout</Button>
        </div>
  )
}

export default LogoutButton
