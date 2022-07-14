import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDesign } from '../designs/useDesign'
import PartForm from './PartForm';

const Part = ({ part }) => {
    const design = useDesign()
    const [showForm, setShowForm] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    const displayInfo = showDetails == true ? <div>{part.details}</div> :  <div>
    <h3>{part.name} ${part.price}</h3>
    <img clasName="partPic" style={{height: "50%"}} src={part.img} alt={part.name} />
    <span>Model: {part.model}</span>
</div>

    const displayPart = showForm == true ? <PartForm toggle={toggleForm} part={part}/> : 
        <div>
            <h3>{part.name} ${part.price}</h3>
            <img className="partPic" src={part.img} alt={part.name} />
            <span>Model: {part.model}</span> 
            
        </div>
    

    const buttonText = showForm == true ? "Hide Form" : "Update"

  return (
    <div  className="card"   style={{borderColor: `${design.accent}`}}  onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
        
        {displayPart}
        <button onClick={toggleForm}>{buttonText}</button>
    </div>
  )
}

export default Part