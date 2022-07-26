import React from 'react'
import { useDesign } from '../designs/useDesign'
import { StyledFooter, StyledFooterLink } from '../../Styles/Styled'

const Footer = () => {
    const design = useDesign()
  return (
    <StyledFooter backgroundColor={design.accent}>
      <StyledFooterLink href="" target="_blank">Email</StyledFooterLink>
      <StyledFooterLink href="https://github.com/BreMarotta/maintenace-tracker" target="_blank">Github Repository
        {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" style="width:18px;height:18px" /> */}
      </StyledFooterLink>
    </StyledFooter>
  )
}

export default Footer