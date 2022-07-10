import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import Part from './Part';
import { Link } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';

const Parts = () => {
    const { loggedIn } = useContext(DisperseInfo)
    const parts = useSelector(state => state.parts.parts)

    const displayParts = parts.map(p => <Part key={p.id} part={p} />)

    if (loggedIn){
        return (
        <div>{displayParts}</div>
        )  
    } else {
        return (
            <div>
            <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
            </div>
        ) 
    }
  
}

export default Parts