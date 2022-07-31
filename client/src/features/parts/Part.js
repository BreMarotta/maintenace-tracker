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

    const details = showDetails ? 
        <div>
            {part.name}
            <hr/>
            {part.model ? <span>Model: {part.model} <br/></span> : ""}
            {part.price ? <span>Price: ${part.price}<br/></span> : "" }
            {part.details ? <span><hr/> {part.details}</span> : ""}
        </div>
        :
        <h1>{part.name}</h1>

    const buttonText = showForm == true ? "Hide Form" : "Update"

    const displayPart = showForm == true ? <PartForm toggle={toggleForm} part={part}/> : 
        <Card onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>  
            <img src={part.img} alt={part.name} />
            <br/>
            <h3>{details}</h3>
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