import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Location } from './Location';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { StyledList, Button } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Locations = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
    const locations = useSelector(state => state.locations.locations)

    const displayLocations = locations.map(l => <Location key={l.id} location={l} />)
  
  if (loggedIn){
    return (
    <StyledList backgroundColor={design.background}>
        <NavLink to="/locations/new" className="navigation"><Button backgroundColor={design.main}>Add a Location to List</Button></NavLink>
        {displayLocations}
    </StyledList>
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
