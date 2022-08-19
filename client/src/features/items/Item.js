import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLi } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Item = ({ item }) => {
  const design = useDesign()
  return (
  <Link to={`/items/${item.id}`}>
    <StyledLi backgroundColor={design.background}>
      {item.name}<hr/> 
    </StyledLi>
  </Link>
  )
}

export default Item