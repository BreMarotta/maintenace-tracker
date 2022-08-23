import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCard } from '../../Styles/Cards.style';
import { useDesign } from '../designs/useDesign';

const Item = ({ item }) => {
  const design = useDesign()
  return (
    <ItemCard backgroundColor={design.background} highlight={design.accent}> 
      <Link to={`/items/${item.id}`} style={{color: "white"}}>
          <div>{item.name}</div>
      </Link>
  </ItemCard>
  )
}

export default Item