import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from './categoriesSlice'

const CategoryForm = () => {
    const dispatch = useDispatch()
    const [categoryObj, setCategoryObj] = useState({
        name: "",
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
    }

  return (
    <div>
        <h5>Items can be divided into distinct categories. These would include: vehicles, large appliances, small appliances, personal devices, etc. If the category you are looking for is not already available, please feel free to add it to our lists. Thank you.</h5>
        <form className="categoryForm" onSubmit={handleSubmit}>
            <label>Category Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={categoryObj.name}
                    onChange={handleChange} />
                <br/>
            <button type="submit">Add Category</button>
        </form>
        {errorLis}
    </div>
  )
}

export default CategoryForm
