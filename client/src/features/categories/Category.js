import React, { useState } from 'react';
import { deleteCatFront, clearCatErrors, deleteCategory } from './categoriesSlice';
import { StyledLi, EditButton } from '../../Styles/Styled';
import { useDesign } from '../designs/useDesign';
import CategoryForm from './CategoryForm';
import { useSelector, useDispatch } from 'react-redux';
import Items from '../items/Items';
import { ErrorLi } from '../../Styles/Form.style';
import { Button, Banner } from '../../Styles/Styled';

const Category = ({ category }) => {
  const design = useDesign()
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false)
  const [showItems, setShowItems] = useState(false)
  const [del, setDel] = useState(false)
  const items = useSelector(state => state.items.items)
  const errors = useSelector(state => state.categories.errors)

  const errorLis = errors ? errors.map(e => <ErrorLi key={e}>{e}</ErrorLi>) : ""

  const has = items.find(x => x.category_id === category.id)

  const toggle = () => {
    setShowForm(!showForm)
  }

  const handleDelete = () => {
    console.log(category)
    dispatch(deleteCategory(category))
    .then(data => {
      if(!data.payload.errors && !data.payload.error){
        dispatch(deleteCatFront(category))
      }
    })
  }

  const handleBack = () => {
    setDel(!del)
    dispatch(clearCatErrors())
  }


  const display = showForm ?
  <div>
    <EditButton backgroundColor="white" accent={design.accent} side="left" onClick={toggle}>✎</EditButton>
    <CategoryForm category={category} toggle={toggle} />
  </div>
  : showItems ?
  <div>
    <br/>
    <EditButton backgroundColor="white" accent={design.accent} side="left" onClick={() => setShowItems(!showItems)}>...</EditButton>
    <Banner main={design.main}>{category.name}</Banner>
    <Items category={category} />
  </div>
  : del ?
  <div><StyledLi backgroundColor={design.background}>
  <br/>
    <Banner main={design.main}>{category.name}</Banner>{errorLis ? errorLis : "To delete a category, there cannot be any items assigned to that location. Are you ready to delete?"}
    <br/><Button backgroundColor={design.main} onClick={handleBack}>Go Back</Button><Button backgroundColor={design.main} onClick={handleDelete}>Delete</Button>
  </StyledLi><br/></div>
  :
  <StyledLi backgroundColor={design.background}>
    <span>
      {has == undefined ? <EditButton backgroundColor="white" accent={design.accent} side="left" onClick={() => setDel(!del)}>🗑️</EditButton> : <EditButton backgroundColor="white" accent={design.accent} side="left" onClick={() => setShowItems(!showItems)}>...</EditButton>}
      <EditButton backgroundColor="white" accent={design.accent} side="left" onClick={() => setShowForm(!showForm)}>✎</EditButton>
        <br/>
        {category.name} 
        <hr/>
    </span>
  </StyledLi>



  return (
    <div>{display}</div>
  )
}

export default Category
