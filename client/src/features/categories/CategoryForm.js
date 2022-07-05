import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, updateCategory } from './categoriesSlice';
import { useHistory } from 'react-router-dom';

const CategoryForm = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    console.log(props)
    const n = (props.category !== undefined || null ? props.category.name : "")
    const x = (props.category !== undefined || null ? props.category.id : "")
    const [categoryObj, setCategoryObj] = useState({
        name: n,
        id: x
    })

    const errors = useSelector((state) => state.categories.errors)   
    const errorLis = errors.map(e => <li key={e}>{e}</li>)
    
    const handleChange = (e) => {
        const newObj = {
            ...categoryObj,
            name: e.target.value
        }
        setCategoryObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCategory(categoryObj))
        if(props.toggle) {
            props.toggle()
        } else {  
            history.push('/categories')
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateCategory(categoryObj))
    }

    const buttonText = props.category !== undefined || null ? "Save Changes" : "Add Category"

    const submitFunction = props.category !== undefined || null ? handleUpdate : handleSubmit

  return (
    <div>
        <form className="categoryForm" onSubmit={submitFunction}>
            <label>Category Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={categoryObj.name}
                    onChange={handleChange} />
                <br/>
            <button type="submit">{buttonText}</button>
        </form>
        {errorLis}
    </div>
  )
}

export default CategoryForm
