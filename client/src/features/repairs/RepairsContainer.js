import React, { useState } from 'react'
import RepairForm from './RepairForm'
import Repairs from './Repairs'
import { useDesign } from '../designs/useDesign'
import { StyledBackground } from '../../Styles/Styled'

const RepairsContainer = () => {
    const design = useDesign()
    const [displayForm, setDisplayForm] = useState(false)

    const toggleDisplay = () => setDisplayForm(!displayForm)

    const displayContainer = displayForm == true ? <RepairForm toggle={toggleDisplay} /> : <Repairs />
  return (
    <StyledBackground backgroundColor={design.background}>
        <label>Log New Repair: </label>
            <input
                type="checkbox"
                checked={displayForm}
                onChange={toggleDisplay} />
        {displayContainer}
    </StyledBackground>
  )
}

export default RepairsContainer