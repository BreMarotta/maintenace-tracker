import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
  return (
    <div>
        <li>{part.name}</li>
    </div>
  )
}

export default Part