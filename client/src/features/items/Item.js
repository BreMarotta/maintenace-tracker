import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div>
      <Link to={`/items/${item.id}`}>{item.name}</Link> 
    </div>
  )
}

export default Item