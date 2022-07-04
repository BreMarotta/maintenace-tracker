import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoriesDropDown from '../categories/CategoriesDropDown';
import LocationsDropDown from '../locations/LocationsDropDown';
import { addItem } from './itemsSlice';

const ItemForm = (props) => {
    const dispatch = useDispatch();
    const cat = (props.item !== undefined || null ? props.item.category_id : "")
    const loc = (props.item !== undefined || null ? props.item.location_id : "")
    const n = (props.item !== undefined || null ? props.item.name : "")
    const py = (props.item !== undefined || null ? props.item.purchase_year : "")
    const y = (props.item !== undefined || null ? props.item.year : "")
    const m = (props.item !== undefined || null ? props.item.make : "")
    const mod = (props.item !== undefined || null ? props.item.model : "")
    const war = (props.item !== undefined || null ? props.item.warrenty : "")
    const image = (props.item !== undefined || null ? props.item.img : "")
    const errors = useSelector(state => state.items.errors);
    // console.log("Errors from Store: ", errors)

    const errorLis = errors.map(e => <li key={e}> {e}</li>)

    const [itemObj, setItemObj] = useState({
        category_id: cat,
        location_id: loc,
        name: n,
        purchase_year: py,
        year: y,
        make: m,
        model: mod,
        warrenty: war,
        img: image,    
    })
    const handleSelect = (type, id) => {
        // console.log(type, id)
        const newObj = {...itemObj, [type]: id}
        setItemObj(newObj)
    }

    const handleChange = (e) => {
        const newObj = {...itemObj, [e.target.name]: e.target.value}
        setItemObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addItem(itemObj))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        // dispatch(updateItem(itemObj))
    }

    const buttonText = props.item !== undefined || null ? "Save Changes" : "Add Item"

    const submitFunction = props.item !== undefined || null ? handleUpdate : handleSubmit


  return (
    <form className="itemForm" onSubmit={handleSubmit}>
        <label>Name: </label>
            <input
                type="text"
                id="name"
                name="name"
                value={itemObj.name}
                onChange={handleChange} />
            <br/>

            <label>Model Year: </label>
            <input
                type="text"
                id="year"
                name="year"
                value={itemObj.year}
                onChange={handleChange} />
            <br/>

            <label>Make: </label>
            <input
                type="text"
                id="make"
                name="make"
                value={itemObj.make}
                onChange={handleChange} />
            <br/>

            <label>Model: </label>
            <input
                type="text"
                id="model"
                name="model"
                value={itemObj.model}
                onChange={handleChange} />
            <br/>

            <label>Year Purchased: </label>
            <input
                type="text"
                id="purchase_year"
                name="purchase_year"
                value={itemObj.purchase_year}
                onChange={handleChange} />
            <br/>

            <label>Warrenty Information: </label>
            <input
                type="text"
                id="warrenty"
                name="warrenty"
                value={itemObj.warrenty}
                onChange={handleChange} />
            <br/>

            <label>Image: </label>
            <input
                type="text"
                id="img"
                name="img"
                value={itemObj.imb}
                onChange={handleChange} />
            <br/>
        <CategoriesDropDown handleSelect={handleSelect}/>
        <LocationsDropDown handleSelect={handleSelect}/>

        <button type="submit">{buttonText}</button>
        {errorLis}
    </form>
  )
}

export default ItemForm
