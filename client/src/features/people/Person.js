import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledLi, StyledLink } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Person = ({ person }) => {
  const design = useDesign()
  return (
    <StyledLi highlight={person.color ? person.color : "black"} backgroundColor={design.background} opacity={person.current == false || null ? .5 : 1}>
      <span><Link to={`/people/${person.id}`}><StyledLink>{person.name}</StyledLink></Link>
          - {person.title}</span><hr/>        
    </StyledLi>
  )
}

export default Person