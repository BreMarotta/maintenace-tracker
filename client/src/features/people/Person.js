import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLi } from '../../Styles/Styled';

const Person = ({ person }) => {
  return (
    <StyledLi backgroundColor={person.color}>
      <span><Link to={`/people/${person.id}`} style={{margin: "1em"}}>{person.name}</Link>
          - {person.title}</span>        
    </StyledLi>
  )
}

export default Person