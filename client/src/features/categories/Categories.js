import React, { useContext } from 'react'
import { useSelector } from "react-redux";
import Category from './Category';
import { Link } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledBackground, Button } from '../../Styles/Styled';
import Login from '../settings/Login';

const Categories = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const categories = useSelector(state => state.categories.categories)

  const displayCategories = categories.map(c => <Category key={c.id} category={c} />)
  if (loggedIn) {
    return (
    <StyledBackground backgroundColor={design.background}>
      <Link to="/categories/new" className="navigation"><Button backgroundColor={design.main}>Add Category</Button></Link>
      {displayCategories}
    </StyledBackground>
  ) 
  } else {
    return (
      <Login />
    )
  }
 
}

export default Categories
