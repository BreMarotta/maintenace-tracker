import React from 'react';
import { StyledLi } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';

const Location = ({ location }) => {
  const design = useDesign()
  return (
    <StyledLi backgroundColor={design.background}>
      <span>
        {location.name} 
        <br/>{location.address} 
        <br/>{location.address_2}
        <hr/>
      </span>
        
    </StyledLi>
  )
}
 export default Location