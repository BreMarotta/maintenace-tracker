import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDesign } from '../designs/useDesign'
import PartForm from './PartForm';
import { Card } from '../../Styles/Cards.style';
import { Button } from '../../Styles/Styled';

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

    const displayInfo = 
    <div>
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
    <Card  accent={design.accent} details={displayInfo}>
        
        {displayPart}
        <Button backgroundColor={design.accent}onClick={toggleForm}>{buttonText}</Button>
    </Card>
  )
}

export default Part