import React, { useContext} from 'react'
import { useDispatch } from 'react-redux'
import { DisperseInfo } from '../../Disperse';

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
        <button onClick={logout} style={{float: "right"}}>Logout</button>
        </div>
  )
}

export default LogoutButton
