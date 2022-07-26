import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import CategoriesDropDown from '../categories/CategoriesDropDown';
import LocationsDropDown from '../locations/LocationsDropDown';
import { addItem, updateItem } from './itemsSlice';
import { DisperseInfo } from '../../Disperse';
import { useDesign } from '../designs/useDesign';
import { StyledList, Form, Button } from '../../Styles/Styled';

const ItemForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch();
    const params = useParams()
    const history = useHistory()
    const design = useDesign()
    const [showCategory, setShowCategory] = useState(false)
    const [showLocation, setShowLocation] = useState(false)
    // console.log(props)

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
        id: params.id 
    })
    const handleSelect = (type, id) => {
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
        history.push('/items')
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        // console.log(itemObj)
        dispatch(updateItem(itemObj))
        props.toggle()
        props.updateItem(itemObj)
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
    <StyledList backgroundColor={design.background}>
        <Form onSubmit={submitFunction}>
        <Button backgroundColor={design.main} type="submit">{buttonText}</Button>
        <br/>
            <label>Name: </label>
            
                <input
                    style={{width: "300px", marginRight: "10px"}}
                    type="text"
                    id="name"
                    name="name"
                    value={itemObj.name}
                    onChange={handleChange} />
                <br/>
                <label>Model Year: </label>
                <input
                    style={{width: "300px", marginRight: "10px"}}
                    type="text"
                    id="year"
                    name="year"
                    value={itemObj.year}
                    onChange={handleChange} />
                <br/>
                <label>Make: </label>
                <input
                    style={{width: "300px", marginRight: "10px"}}
                    type="text"
                    id="make"
                    name="make"
                    value={itemObj.make}
                    onChange={handleChange} />
                <br/>
                <label>Model: </label>
                <input
                    style={{width: "300px", marginRight: "10px"}}
                    type="text"
                    id="model"
                    name="model"
                    value={itemObj.model}
                    onChange={handleChange} />
                <br/>
                <label>Year Purchased: </label>
                <input
                    style={{width: "300px", marginRight: "10px"}}
                    type="text"
                    id="purchase_year"
                    name="purchase_year"
                    value={itemObj.purchase_year}
                    onChange={handleChange} />
                <br/>
                <label>Warrenty Information: </label>
                <input
                    style={{width: "300px", marginRight: "10px"}}
                    type="text"
                    id="warrenty"
                    name="warrenty"
                    value={itemObj.warrenty}
                    onChange={handleChange} />
                <br/>
                <label>Image: </label>
                <input
                    style={{width: "300px", marginRight: "10px"}}
                    type="text"
                    id="img"
                    name="img"
                    value={itemObj.imb}
                    onChange={handleChange} />
                <br/>           
            {errorLis}
        </Form>
        {catLocPart}
    </StyledList>
  )
} else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
  
}

export default ItemForm
