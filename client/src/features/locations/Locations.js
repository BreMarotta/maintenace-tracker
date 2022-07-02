import React from 'react';
import { useSelector } from 'react-redux';
import { Location } from './Location';
import { NavLink } from 'react-router-dom';

const Locations = () => {
    const locations = useSelector(state => state.locations.locations)

    const displayLocations = locations.map(l => <Location key={l.id} location={l} />)
  return (
    <div>
        {displayLocations}
        <br/>
        <NavLink to="/locations/new" className="navigation">Add a Location to List</NavLink>
    </div>
  )
}

export default Locations
