import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLi } from '../../Styles/Styled';

const Item = ({ item }) => {
  return (
    <StyledLi>
      <Link to={`/items/${item.id}`}>{item.name}</Link> 
    </StyledLi>
  )
}

export default Item