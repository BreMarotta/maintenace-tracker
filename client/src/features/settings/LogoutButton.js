import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMe, logOut } from './manageUsersSlice'

const LogoutButton = () => {
    const dispatch = useDispatch()
    // const loggedInUser = useSelector((state) => state.owners.user);



    // console.log("User available to all components: ", loggedInUser)

  return (
    <div>
        <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
  )
}

export default LogoutButton
