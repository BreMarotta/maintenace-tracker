import React, { useState } from 'react';
import PartForm from './PartForm';
import Parts from './Parts'

const PartsContainer = () => {
    const [displayPartForm, setDisplayPartForm] = useState(false)

    const toggleDisplay = () => {
        setDisplayPartForm(!displayPartForm)
    }

    const displayContainer = displayPartForm == true ? <PartForm toggle={toggleDisplay}/> : ""
  return (
    <div> 
        <h3>Container</h3>
        <label>Add Part to This Item: </label>
            <input
                type="checkbox"
                checked={displayPartForm}
                onChange={toggleDisplay} />
        {displayContainer}
        <Parts />
    </div>
  )
}

export default PartsContainer