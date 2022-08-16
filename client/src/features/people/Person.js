import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLi, StyledLink } from '../../Styles/Styled';

const Person = ({ person }) => {

  return (
    <StyledLi backgroundColor={person.color ? person.color : "black"} opacity={person.current == false || null ? .75 : 1}>
      <span><StyledLink><Link to={`/people/${person.id}`} style={{margin: "1em"}}>{person.name}</Link></StyledLink>
          - {person.title}</span>        
    </StyledLi>
  )
}

export default Person