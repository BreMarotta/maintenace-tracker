import React, { useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPart, updatePart } from './partsSlice';
import { DisperseInfo } from '../../Disperse';

const PartForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch();
    const params = useParams();
    console.log(props)

    const n = (props.part !== undefined || null ? props.part.name  : "")
    const m = (props.part !== undefined || null ? props.part.model  : "")
    const i = (props.part !== undefined || null ? props.part.img  : "")
    const p = (props.part !== undefined || null ? props.part.price  : "")
    const d = (props.part !== undefined || null ? props.part.details  : "")
    const x = (props.part !== undefined || null ? props.part.id : "")
    
    const [partObj, setPartObj] = useState({
        name: n,
        model: m,
        img: i,
        price: p,
        details: d,
        id: x,
        item_id: params.id
    })

    console.log(partObj)
    const errors = useSelector(state => state.parts.errors);
    const errorLis = errors.map(e => <li key={e}>{e}</li>)

    const handleChange = (e) => {
        const newObj = {...partObj, [e.target.name]: e.target.value}
        setPartObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPart(partObj))
        props.toggle()
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log("called update")
        dispatch(updatePart(partObj))
        props.toggle()
    }

    const buttonText = props.part !== undefined || null ? "Save Changes" : "Add Part"

    const submitFunction = props.part !== undefined || null ? handleUpdate : handleSubmit

if (loggedIn) {
    return (
        <div>Form to add Part
            <form className="partForm" onSubmit={submitFunction}>
            <button type="submit">{buttonText}</button>
            <br/>
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