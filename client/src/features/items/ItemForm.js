import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoriesDropDown from '../categories/CategoriesDropDown';
import LocationsDropDown from '../locations/LocationsDropDown';
import { addItem } from './itemsSlice';

const ItemForm = (props) => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.items.errors);

    const errorsLis = errors.map(e => <li key={e}> {e}</li>)

    const [itemObj, setItemObj] = useState({
        category_id: "",
        location_id: "",
        name: "",
        purchase_year: "",
        year: "",
        make: "",
        model: "",
        warrenty: "",
        img: "",    
    })
    const handleSelect = (type, id) => {
        console.log(type, id)
        const newObj = {...itemObj, [type]: id}
        setItemObj(newObj)
    }

    const handleChange = (e) => {
        const newObj = {...itemObj, [e.target.name]: e.target.value}
        setItemObj(newObj)
    }

    

  return (
    <div>ItemForm
        <CategoriesDropDown handleSelect={handleSelect}/>
        <LocationsDropDown handleSelect={handleSelect}/>
    </div>
  )
}

export default ItemForm
