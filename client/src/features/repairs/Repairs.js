import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Repair from './Repair';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, Button } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Repairs = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const repairs = useSelector(state => state.repairs.repairs)

  const display = repairs.map(r => <Repair key={r.id} repair={r} />)
  return (
    <StyledBackground backgroundColor={design.background}>
      {display}
    </StyledBackground>
  )
}

export default Repairs