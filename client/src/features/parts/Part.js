import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDesign } from '../designs/useDesign'
import PartForm from './PartForm';
import { Card, Grid } from '../../Styles/Cards.style';
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

    const buttonText = showForm == true ? "Hide Form" : "Update"

    const displayPart = showForm == true ? <PartForm toggle={toggleForm} part={part}/> : 
        <Card>  
            <img src={part.img} alt={part.name} />
            <br/>
            <h3>{part.name}</h3>
            {showDetails}
            <Button backgroundColor={design.accent} onClick={toggleForm}>{buttonText}</Button>           
        </Card>
    



  return (
    <div  accent={design.accent}>
        {showDetails}
        {displayPart}
    </div>
  )
}

export default Part