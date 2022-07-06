import React, { useState, useEffect } from 'react'
import { initDesign, logoutDesign } from "./features/designs/designSlice";
import { initPeople, logoutPeople } from "./features/people/peopleSlice";
import { initCategories, logoutCategories } from './features/categories/categoriesSlice'
import { initLocations, logoutLocations } from "./features/locations/locationsSlice";
import { initItems, logoutItems } from "./features/items/itemsSlice";
import { initUser, logOut } from './features/settings/manageUsersSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

const DisperseInfo = React.createContext()

const UserProvider = ({children}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.users.user)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then((data) => {
            if(!data.errors) {
                setLoggedIn(true)
                initAll(data) 
            } else {
                setLoggedIn(false)
                clearAll()
            }            
        })
    }, [loggedIn])

    const initAll = (user) => {
        setLoggedIn(true)
        dispatch(initUser(user))
        dispatch(initDesign(user.designs))
        dispatch(initPeople(user.people))
        dispatch(initCategories(user.categories))
        dispatch(initLocations(user.locations))
        dispatch(initItems(user.items))
    }

    const clearAll = () => {
        setLoggedIn(false)
        dispatch(logoutDesign())
        dispatch(logoutCategories())
        dispatch(logoutItems())
        dispatch(logoutLocations())
        dispatch(logoutPeople())
    }

    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }



  return (
    <DisperseInfo.Provider value={{
        loggedIn,
        user,
        handleLogout,
        handleLogin
    }}>
        {children}
    </DisperseInfo.Provider>
  )
}

export { DisperseInfo, UserProvider };