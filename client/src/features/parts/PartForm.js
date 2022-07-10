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
        details: d
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