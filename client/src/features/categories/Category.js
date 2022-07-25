import React from 'react'
import { StyledLi } from '../../Styles/Styled'

const Category = ({ category }) => {
  return (
    <StyledLi>{category.name}</StyledLi>
  )
}

export default Category
