import React, { useState, useEffect } from 'react'
import { initDesign, logoutDesign } from "./features/designs/designSlice";
import { initPeople, logoutPeople } from "./features/people/peopleSlice";
import { initCategories, logoutCategories } from './features/categories/categoriesSlice'
import { initLocations, logoutLocations } from "./features/locations/locationsSlice";
import { initItems, logoutItems } from "./features/items/itemsSlice";
import { initUser, logOut } from './features/settings/manageUsersSlice';
import { initRepairs, logoutRepairs } from './features/repairs/repairsSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { initParts } from './features/parts/partsSlice';

const DisperseInfo = React.createContext()

const UserProvider = ({children}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.users.user)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        getMe()
        // fetch('/me')
        // .then(res => res.json())
        // .then((data) => {
        //     if(!data.errors) {
        //         setLoggedIn(true)
        //         initAll(data) 
        //     } else {
        //         setLoggedIn(false)
        //         clearAll()
        //     }            
        // })
    }, [])

    const getMe = () => {
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
    }

    const initAll = (user) => {
        setLoggedIn(true)
        console.log(user)
        dispatch(initUser(user))
        dispatch(initDesign(user.designs))
        dispatch(initPeople(user.people))
        dispatch(initCategories(user.categories))
        dispatch(initLocations(user.locations))
        dispatch(initItems(user.items))
        dispatch(initParts(user.parts))
        dispatch(initRepairs(user.repairs))
    }

    const clearAll = () => {
        setLoggedIn(false)
        dispatch(logoutDesign())
        dispatch(logoutCategories())
        dispatch(logoutItems())
        dispatch(logoutLocations())
        dispatch(logoutPeople())
        dispatch(logoutRepairs())
    }

    const handleLogin = (user) => {
        setLoggedIn(true)
        initAll(user)
        history.push('/settings')
    }
    const handleLogout = () => {
        setLoggedIn(false)
        clearAll()
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