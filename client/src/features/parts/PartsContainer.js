import React, { useState } from 'react';
import PartForm from './PartForm';
import Parts from './Parts';
import { useDesign } from '../designs/useDesign'
import { StyledBackground } from '../../Styles/Styled';

const PartsContainer = ({ item }) => {
    const design = useDesign()
    const [displayPartForm, setDisplayPartForm] = useState(false)

    const toggleDisplay = () => {
        setDisplayPartForm(!displayPartForm)
    }

    const displayContainer = displayPartForm == true ? 
    <PartForm toggle={toggleDisplay}/> 
    : 
    <div>
      <hr/>
      <Parts item={item}/>
    </div>

  return (
    <div>
    <StyledBackground backgroundColor={design.background}> 
        <label>Add Part to This Item: </label>
            <input
                type="checkbox"
                checked={displayPartForm}
                onChange={toggleDisplay} />
        {displayContainer}
    </StyledBackground>
    </div>
  )
}

export default PartsContainer