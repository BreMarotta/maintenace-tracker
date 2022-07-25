import React, { useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { Button } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const LogoutButton = () => {
    const { handleLogout } = useContext(DisperseInfo)
    const design = useDesign()
    const history = useHistory()

    const logout = () => {
      fetch('/logout', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      })
      .then(res => {
        handleLogout()
        history.push('/')
      })
    }   

  return (
    <div>
        <Button onClick={logout} backgroundColor={design.background} style={{float: "right"}}>Logout</Button>
        </div>
  )
}

export default LogoutButton
