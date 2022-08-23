import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Location } from './Location';
import { Link } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Button } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import Login from '../settings/Login';

const Locations = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
    const locations = useSelector(state => state.locations.locations)

    const displayLocations = locations.map(l => <Location key={l.id} location={l} />)
  
  if (loggedIn){
    return (
    <StyledBackground backgroundColor={design.background}>
        <Link to="/locations/new" className="navigation"><Button backgroundColor={design.main}>Add a Location to List</Button></Link>
        {displayLocations}
    </StyledBackground>
    )
  } else {
    return (
      <Login />
    )
  }
  
}

export default Locations
