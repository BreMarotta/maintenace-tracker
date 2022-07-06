import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Location } from './Location';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';

const Locations = () => {
  const loggedIn = useContext(DisperseInfo)
    const locations = useSelector(state => state.locations.locations)

    const displayLocations = locations.map(l => <Location key={l.id} location={l} />)
  
  if (loggedIn == "true"){
    return (
    <div>
        {displayLocations}
        <br/>
        <NavLink to="/locations/new" className="navigation">Add a Location to List</NavLink>
    </div>
    )
  } else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
  
}

export default Locations
