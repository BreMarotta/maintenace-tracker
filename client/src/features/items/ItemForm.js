import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import CategoriesDropDown from '../categories/CategoriesDropDown';
import LocationsDropDown from '../locations/LocationsDropDown';
import { addItem, updateItem, clearItemErrors } from './itemsSlice';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledBackground, Button } from '../../Styles/Styled';
import { Form, ErrorLi } from '../../Styles/Form.style';

const ItemForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch();
    const params = useParams()
    const history = useHistory()
    const design = useDesign()
   
    const [showCategory, setShowCategory] = useState(false)
    const [showLocation, setShowLocation] = useState(false)

    const cat = (props.item !== undefined || null ? props.item.category_id : "")
    const loc = (props.item !== undefined || null ? props.item.location_id : "")
    const n = (props.item !== undefined || null ? props.item.name : "")
    const py = (props.item !== undefined || null ? props.item.purchase_year : "")
    const y = (props.item !== undefined || null ? props.item.year : "")
    const m = (props.item !== undefined || null ? props.item.make : "")
    const mod = (props.item !== undefined || null ? props.item.model : "")
    const war = (props.item !== undefined || null ? props.item.warrenty : "")
    const image = (props.item !== undefined || null ? props.item.img : "")
    const z = (props.item !== undefined || null ? parseInt(params.id) : "")
    
    const errors = useSelector(state => state.items.errors);
    const errorLis = errors.map(e => <ErrorLi key={e}> {e}</ErrorLi>)

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
        id: z
    })

    const handleSelect = (type, id) => {
        dispatch(clearItemErrors())
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
        .then(data => {
            if(!data.payload.errors && !data.payload.error){
              history.push('/items')  
            }
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateItem(itemObj))
        .then(data => {
            if(!data.payload.errors){
                props.toggle()
                props.updateItem(itemObj)
                dispatch(clearItemErrors())
            }
        })
    }
    
    const toggleCategory = () => {setShowCategory(!showCategory)}
    const toggleLocation = () => {setShowLocation(!showLocation)}

    const displayCategory = showCategory == true ? <CategoriesDropDown handleSelect={handleSelect} cat={cat}/> : ""

    const displayLocation = showLocation == true ? <LocationsDropDown handleSelect={handleSelect} loc={loc}/> : ""

    const buttonText = props.item !== undefined || null ? "Save Changes" : "Add Item"

    const submitFunction = props.item !== undefined || null ? handleUpdate : handleSubmit

    const catLocPart = (props.item != undefined || null ?   
    <div>
        <div>
            <label>Reselect Category ? </label>
                <input
                    type="checkbox"
                    checked={showCategory}
                    onChange={toggleCategory} />
        </div>
        {displayCategory}
        <div>
            <label>Reselect Location ? </label>
                <input
                    type="checkbox"
                    checked={showLocation}
                    onChange={toggleLocation} />
        </div>
        {displayLocation}
    </div> :
    <div>
        <CategoriesDropDown handleSelect={handleSelect} />
        <LocationsDropDown handleSelect={handleSelect} />
    </div>
     )

 if (loggedIn) {
  return (
    <StyledBackground backgroundColor={design.background}>
        <Form onSubmit={submitFunction}>
        <Button backgroundColor={design.accent} type="submit">{buttonText}</Button>
        {errorLis}
        <br/>
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
        </Form>
        {catLocPart}
    </StyledBackground>
  )
} else {
    return (
      <div>

      </div>
    )
  }
  
}

export default ItemForm
