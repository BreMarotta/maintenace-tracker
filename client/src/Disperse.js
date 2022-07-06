import React, { useState, useEffect } from 'react'
import { initDesign, logoutDesign } from "./features/designs/designSlice";
import { initPeople, logoutPeople } from "./features/people/peopleSlice";
import { initCategories, logoutCategories } from './features/categories/categoriesSlice'
import { initLocations, logoutLocations } from "./features/locations/locationsSlice";
import { initItems, logoutItems } from "./features/items/itemsSlice";
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from './features/settings/manageUsersSlice'
import { useHistory } from 'react-router-dom';

const DisperseInfo = React.createContext()

const UserProvider = ({children}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const [user, setUser] = useState({})
    const loggedIn = useSelector((state) => state.users.loggedin);
    const user = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getMe())
        if (loggedIn == "true"){
            // console.log(user)
            dispatch(initDesign(user.designs))
            dispatch(initPeople(user.people))
            dispatch(initCategories(user.categories))
            dispatch(initLocations(user.locations))
            dispatch(initItems(user.items))
        } else {
            // console.log(user)
            dispatch(logoutDesign())
            dispatch(logoutCategories())
            dispatch(logoutItems())
            dispatch(logoutLocations())
            dispatch(logoutPeople())
        }
          
      }, [loggedIn]);



  return (
    <DisperseInfo.Provider value={{
        loggedIn,
        user,
    }}>
        {children}
    </DisperseInfo.Provider>
  )
}

export { DisperseInfo, UserProvider };