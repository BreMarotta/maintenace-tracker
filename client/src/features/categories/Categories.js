import React from 'react'
import { useSelector } from "react-redux";
import Category from './Category';
import { NavLink } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(state => state.categories.categories)

  const displayCategories = categories.map(c => <Category key={c.id} category={c} />)
  return (
    <div>
      {displayCategories}
      <br/>
      <NavLink to="/categories/new" className="navigation">Add Category</NavLink>
    </div>
  )
}

export default Categories
