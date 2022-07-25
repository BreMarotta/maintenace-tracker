import React, { useContext } from 'react'
import { useSelector } from "react-redux";
import Category from './Category';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledList, Button } from '../../Styles/Styled';

const Categories = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const categories = useSelector(state => state.categories.categories)

  const displayCategories = categories.map(c => <Category key={c.id} category={c} />)
  if (loggedIn) {
    return (
    <StyledList backgroundColor={design.background}>
      <NavLink to="/categories/new" className="navigation"><Button backgroundColor={design.main}>Add Category</Button></NavLink>
      {displayCategories}
    </StyledList>
  ) 
  } else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
 
}

export default Categories
