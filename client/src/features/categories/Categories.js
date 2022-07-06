import React, { useContext } from 'react'
import { useSelector } from "react-redux";
import Category from './Category';
import { NavLink } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';

const Categories = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const categories = useSelector(state => state.categories.categories)

  const displayCategories = categories.map(c => <Category key={c.id} category={c} />)
  if (loggedIn == "true") {
    return (
    <div>
      {displayCategories}
      <br/>
      <NavLink to="/categories/new" className="navigation">Add Category</NavLink>
    </div>
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
