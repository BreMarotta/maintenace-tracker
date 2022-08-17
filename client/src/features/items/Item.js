import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLi } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Item = ({ item }) => {
  const design = useDesign()
  return (
    <StyledLi backgroundColor={design.background}>
      <Link to={`/items/${item.id}`}>{item.name}</Link> 
    </StyledLi>
  )
}

export default Item