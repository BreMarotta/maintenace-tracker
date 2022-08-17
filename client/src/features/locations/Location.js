import React from 'react'
import { StyledLi } from '../../Styles/Styled'
import { useDesign } from '../designs/useDesign'

export const Location = ({ location }) => {
  const design = useDesign()
  return (
    <StyledLi backgroundColor={design.background}>
      <span>
        <strong>{location.name} </strong> 
        <br/>{location.address} 
        <br/>{location.address_2}
        <hr/>
      </span>
        
    </StyledLi>
  )
}
