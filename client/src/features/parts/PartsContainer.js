import React, { useState } from 'react';
import PartForm from './PartForm';
import Parts from './Parts'
import { useDesign } from '../designs/useDesign'
import { StyledBackground } from '../../Styles/Styled';

const PartsContainer = () => {
    const design = useDesign()
    const [displayPartForm, setDisplayPartForm] = useState(false)

    const toggleDisplay = () => {
        setDisplayPartForm(!displayPartForm)
    }

    const displayContainer = displayPartForm == true ? <PartForm toggle={toggleDisplay}/> : <Parts />
  return (
    <StyledBackground backgroundColor={design.background}> 
        <label>Add Part to This Item: </label>
            <input
                type="checkbox"
                checked={displayPartForm}
                onChange={toggleDisplay} />
        {displayContainer}
        {/* <Parts /> */}
    </StyledBackground>
  )
}

export default PartsContainer