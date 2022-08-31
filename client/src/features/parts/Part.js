import React, { useState } from 'react';
import { useDesign } from '../designs/useDesign'
import { Card } from '../../Styles/Cards.style';
import { Button } from '../../Styles/Styled';

const Part = ({ part, toggleForm }) => {
    const design = useDesign()
    const [showDetails, setShowDetails] = useState(false)

    const handleClick = () => {
        toggleForm(part)
    }

    const details = showDetails ? 
        <div>
            <p>{part.name}</p>
            <hr/>
            {part.model ? <span>Model: {part.model} <br/></span> : ""}
            {part.price ? <span>Price: ${part.price}<br/></span> : "" }
            {part.details ? <span><hr/> {part.details}</span> : ""}
        </div>
        :
        <p>{part.name}</p>

  return (
    <div>
        <Card   accent={design.accent} onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>  
        <img src={part.img ? part.img : "https://miro.medium.com/max/1400/1*JvriTgiihk6SS1lxSM7rKg.jpeg"} alt={part.name} />
        <br/>
        <h3>{details}</h3>
        <Button onClick={handleClick}>Update</Button>           
        </Card>
    </div>
  )
}

export default Part