import React from 'react';
import { Link } from 'react-router-dom';

const Person = ({ person }) => {
  return (
    <div style={{background: person.color}}>
      <Link to={`/people/${person.id}`}>{person.name}</Link>
        <p>{person.title}</p>
        
    </div>
  )
}

export default Person