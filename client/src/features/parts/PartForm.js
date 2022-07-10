import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPart, updatePart } from './partsSlice';
import { DisperseInfo } from '../../Disperse';

const PartForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch();
    const params = useParams();

    const n = (props.part !== undefined || null ? props.part.name  : "")
    const m = (props.part !== undefined || null ? props.part.model  : "")
    const i = (props.part !== undefined || null ? props.part.img  : "")
    const p = (props.part !== undefined || null ? props.part.price  : "")
    const d = (props.part !== undefined || null ? props.part.details  : "")
    
    const [partObj, setPartObj] = useState({
        name: n,
        model: m,
        img: i,
        price: p,
        details: d,
        item_id: params.id
    })

    const errors = useSelector(state => state.parts.errors);
    const errorLis = errors.map(e => <li key={e}>{e}</li>)

    const handleChange = (e) => {
        const newObj = {...partObj, [e.target.name]: e.target.value}
        setPartObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPart(partObj))
        console.log(partObj)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updatePart(partObj))
        props.updatePart(partObj)
    }

    const buttonText = props.part !== undefined || null ? "Save Changes" : "Add Part"

    const submitFunction = props.item !== undefined || null ? handleUpdate : handleSubmit

if (loggedIn) {
    return (
        <div>Form to add Part
            <form className="partForm" onSubmit={submitFunction}>
            <button type="submit">{buttonText}</button>
                <label>Part Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={partObj.name}
                        onChange={handleChange} />
                    <br/>
                    <label>Model: </label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={partObj.model}
                        onChange={handleChange} />
                    <br/>
                    <label>Image: </label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        value={partObj.img}
                        onChange={handleChange} />
                    <br/>
                    <label>Price: </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={partObj.price}
                        onChange={handleChange} />
                    <br/>
                    <label>Additional Details: </label>
                    <input
                        type="text"
                        id="details"
                        name="details"
                        value={partObj.details}
                        onChange={handleChange} />
                    <br/>

            </form>
        </div>
    )
} else {
    return (
        <div>
          <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
        </div>
      )    
}
  
}

export default PartForm