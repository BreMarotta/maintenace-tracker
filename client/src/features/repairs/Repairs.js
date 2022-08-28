import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Repair from './Repair';
import { DisperseInfo } from '../../Disperse';
import { StyledBackground, EditButton } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Repairs = (props) => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const repairs = useSelector(state => state.repairs.repairs)
  const [filterComplete, setFilterComplete] = useState(false)

  const filRepairs = repairs.filter(r => r.complete !== true)

  const fRepairs = props.person ? repairs.filter(r => r.person_id === props.person.id) 
  : filterComplete ? filRepairs
  : repairs

  const display = fRepairs.map(r => <div><Repair key={r.id} repair={r} person={props.person}/><br/></div>)

  const aText = filterComplete ? "Ongoing Repairs" : "All Repairs"

  return (
    <StyledBackground backgroundColor={design.background}>
      <EditButton backgroundColor={design.accent} side="center" onClick={() => setFilterComplete(!filterComplete)}>{aText}</EditButton>
      <br/>
        {display}      
    </StyledBackground>
  )
}

export default Repairs