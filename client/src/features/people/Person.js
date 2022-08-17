import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledLi, StyledLink } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Person = ({ person }) => {
  const design = useDesign()
  return (
    <StyledLi highlight={person.color ? person.color : "black"} backgroundColor={design.background} opacity={person.current == false || null ? .85 : 1}>
      <span><StyledLink><Link to={`/people/${person.id}`}>{person.name}</Link></StyledLink>
          - {person.title}</span>        
    </StyledLi>
  )
}

export default Person