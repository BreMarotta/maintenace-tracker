import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, updateCategory } from './categoriesSlice';
import { useHistory } from 'react-router-dom';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign'
import { StyledBackground, Button } from '../../Styles/Styled';
import { Form, ErrorLi } from '../../Styles/Form.style';

const CategoryForm = (props) => {
    console.log(props)
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch()
    const history = useHistory()
    const design = useDesign()
    const n = (props.category !== undefined || null ? props.category.name : "")
    const x = (props.category !== undefined || null ? props.category.id : "")
    const [categoryObj, setCategoryObj] = useState({
        name: n,
        id: x
    })

    const errors = useSelector((state) => state.categories.errors)   
    const errorLis = errors.map(e => <ErrorLi key={e}>{e}</ErrorLi>)
    
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
        .then(data => {
            console.log(data)
            if(!data.payload.errors && !data.payload.error){
                const x = data.payload.id
                setCategoryObj({...categoryObj, ["id"]: x})
                if(props.toggle) {
                    props.toggle()
                } else {
                    history.push('/categories')
                }
            }else {
                
            }
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateCategory(categoryObj))
        .then(data => {
            if(!data.payload.errors){
                props.toggle()
            } else {
                history.push('/categories')
            }
        })
    }

    const buttonText = props.category !== undefined || null ? "Save Changes" : "Add Category"

    const submitFunction = props.category !== undefined || null ? handleUpdate : handleSubmit

    if (loggedIn){
        return (
            <StyledBackground backgroundColor={design.background}>
                <Form className="categoryForm" onSubmit={submitFunction}>
                    {errorLis}
                    <label>Category Name: </label>
                        <input
                            style={{width: "100%"}}
                            type="text"
                            id="name"
                            name="name"
                            value={categoryObj.name}
                            onChange={handleChange} />
                        <br/>
                    <Button backgroundColor={design.accent} type="submit">{buttonText}</Button>
                </Form>  
            </StyledBackground>
        ) 
    } else {
        return (
            <div>
            <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
            </div>
        )
    }
  
}

export default CategoryForm
