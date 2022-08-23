import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Button } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import Login from '../settings/Login';
import Location from './Location';
import { clearLocErrors } from './locationsSlice';

const Locations = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const dispatch = useDispatch()
  const errors = useSelector(state => state.locations.errors)
  const locations = useSelector(state => state.locations.locations)

  const displayLocations = locations.map(l => <Location key={l.id} location={l} />)

  useEffect(() => {
    if(errors){
      dispatch(clearLocErrors())
    }
  }, [])


  
  if (loggedIn){
    return (
    <StyledBackground backgroundColor={design.background}>
        <Link to="/locations/new" className="navigation"><Button backgroundColor={design.main}>Add a Location to List</Button></Link>
        <br/>
        <br/>
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
