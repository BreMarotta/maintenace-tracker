import React from 'react'
import { useDesign } from '../designs/useDesign'
import { StyledFooter, StyledFooterLink } from '../../Styles/Styled'

const Footer = () => {
    const design = useDesign()
    const color = design.accent ? design.accent : "darkslateblue"
  return (
    <StyledFooter backgroundColor={color}>
      <StyledFooterLink href=""target="_blank">Email Site Creator</StyledFooterLink>
      <StyledFooterLink href="https://github.com/BreMarotta/maintenace-tracker" target="_blank">Github Repository
        {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" style="width:18px;height:18px" /> */}
      </StyledFooterLink>
      <StyledFooterLink href="" target="_blank">Blog</StyledFooterLink>
      <StyledFooterLink href="" target="_blank">YouTube</StyledFooterLink>
    </StyledFooter>
  )
}

export default Footer