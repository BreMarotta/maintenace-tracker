import React from 'react'
import { StyledLi } from '../../Styles/Styled'
import { useDesign } from '../designs/useDesign'

const Category = ({ category }) => {
  const design = useDesign()
  return (
    <StyledLi backgroundColor={design.background}>{category.name}</StyledLi>
  )
}

export default Category
