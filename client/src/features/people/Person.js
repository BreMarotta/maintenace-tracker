import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLink, Button } from '../../Styles/Styled';
import { PersonCard } from '../../Styles/Cards.style';
import { useDesign } from '../designs/useDesign';

const Person = ({ person }) => {
  const design = useDesign()
  return (
    <PersonCard highlight={person.color ? person.color : "black"} backgroundColor={person.current ? "white" : "lightgray"} >
          <Link to={`/people/${person.id}`}>
                    <StyledLink>
                      <Button backgroundColor={person.color ? person.color : "black"}>{person.name}</Button>
                    </StyledLink>
                  </Link>
              {person.title}    
    </PersonCard>
  )
}

export default Person