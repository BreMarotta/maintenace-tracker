import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './manageUsersSlice'

const LogoutButton = () => {
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(logOut())} style={{float: "right"}}>Logout</button>
        </div>
  )
}

export default LogoutButton
