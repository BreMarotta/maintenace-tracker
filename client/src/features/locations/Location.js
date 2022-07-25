import React from 'react'
import { StyledLi } from '../../Styles/Styled'

export const Location = ({ location }) => {
  return (
    <StyledLi>
      <span>
        <strong>{location.name} </strong> {location.address} {location.address_2}
        <hr/>
      </span>
        
    </StyledLi>
  )
}
