import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDesign } from '../designs/useDesign'
import PartForm from './PartForm';

const Part = ({ part }) => {
    const design = useDesign()
    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const displayPart = showForm == true ? <PartForm toggle={toggleForm} part={part}/> : 
    <div >
        <h3>{part.name}</h3>
        <img style={{maxHeight: "150px", maxWidth: "100%"}} src={part.img} alt={part.name} />
        <h5>{part.model} cost: ${part.price}</h5>
        <p>{part.details}</p>
    </div>


  return (
    <div className="card" style={{borderColor: `${design.accent}`}}>
        <label>Update Part: </label>
            <input
                type="checkbox"
                checked={showForm}
                onChange={toggleForm} />
        {displayPart}
    </div>
  )
}

export default Part