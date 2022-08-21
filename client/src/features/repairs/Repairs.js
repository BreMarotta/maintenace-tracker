import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Repair from './Repair';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Button } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Repairs = (props) => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const repairs = useSelector(state => state.repairs.repairs)

  const fRepairs = props.person ? repairs.filter(r => r.person_id === props.person.id) : repairs

  const display = fRepairs.map(r => <div><Repair key={r.id} repair={r} /><br/></div>)

  return (
    <StyledBackground backgroundColor={design.background}>
        {display}      
    </StyledBackground>
  )
}

export default Repairs