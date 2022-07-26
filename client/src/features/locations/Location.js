import React from 'react'
import { StyledLi } from '../../Styles/Styled'

export const Location = ({ location }) => {
  console.log(location)
  return (
    <StyledLi>
      <span>
        <strong>{location.name} </strong> 
        <br/>{location.address} 
        <br/>{location.address_2}
        <hr/>
      </span>
        
    </StyledLi>
  )
}
