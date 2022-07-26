import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDesign } from '../designs/useDesign'
import PartForm from './PartForm';
import { Card } from '../../Styles/Cards.style';
import { Button, Banner } from '../../Styles/Styled';

const Part = ({ part }) => {
    const design = useDesign()
    const [showForm, setShowForm] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    console.log(part)
    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    const details = 
        <div>
            {part.model ? <span>Model: {part.model}</span> : ""}
            {part.price ? <span>Price: ${part.price}<br/></span> : "" }
            {part.details ? <span>Additional Information: {part.details}</span> : ""}
        </div>

    const displayPart = showForm == true ? <PartForm toggle={toggleForm} part={part}/> : 
        <div>
            <h3>{part.name}</h3>
            <img className="partPic" src={part.img} alt={part.name} />
            <br/>
            {showDetails} 
            
        </div>
    

    const buttonText = showForm == true ? "Hide Form" : "Update"

  return (
    <Card  accent={design.accent}>
        {showDetails}
        {displayPart}
        <Button backgroundColor={design.accent}onClick={toggleForm}>{buttonText}</Button>
    </Card>
  )
}

export default Part