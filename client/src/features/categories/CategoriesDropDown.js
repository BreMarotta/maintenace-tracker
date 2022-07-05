import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryForm from './CategoryForm';

const CategoriesDropDown = (props) => {
  // console.log(props)
    const categories = useSelector(state => state.categories.categories)
    const [category, setCategory] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dropDown = categories.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <CategoryForm toggle={toggle}/> : ""

    const handleCategorySelect = (e) => {
        e.target.value == "add" ? toggle() : props.handleSelect("category_id", e.target.value)
    }

    const d = (props.cat !== undefined || null ? props.cat : "")
    // const dText = (props.cat !== undefined || null ? )

  return (
    <div>
        <label>Category: </label>
            <select onChange={handleCategorySelect}>
                <option defaultValue={d}>Select From List</option>
                {dropDown}
                <option value="add" key="addCategory">Add Category</option>
            </select>
            {formFlag}
    </div>
  )
}

export default CategoriesDropDown