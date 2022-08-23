import React from 'react'
import { useDesign } from '../designs/useDesign'
import { StyledFooter, StyledFooterLink } from '../../Styles/Styled'

const Footer = () => {
    const design = useDesign()
    const color = design.main ? design.main : "darkslategray"
  return (
    <StyledFooter backgroundColor={color}>
      <StyledFooterLink><strong>Site Creator information: </strong></StyledFooterLink>
      <StyledFooterLink href="https://bremarotta.wixsite.com/breanne"target="_blank">Portfolio</StyledFooterLink>
      <StyledFooterLink href="https://www.linkedin.com/in/bremarotta/" target="_blank">LinkedIn</StyledFooterLink>
      <StyledFooterLink href="https://github.com/BreMarotta/maintenace-tracker" target="_blank">Github Repository
      </StyledFooterLink>
      <StyledFooterLink href="" target="_blank">Blog</StyledFooterLink>
      <StyledFooterLink href="" target="_blank">YouTube</StyledFooterLink>
    </StyledFooter>
  )
}

export default Footer