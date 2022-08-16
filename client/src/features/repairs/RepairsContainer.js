import React, { useState, useContext } from 'react'
import RepairForm from './RepairForm'
import Repairs from './Repairs'
import { useDesign } from '../designs/useDesign'
import { StyledBackground } from '../../Styles/Styled'
import { DisperseInfo } from '../../Disperse';
import Login from '../settings/Login'

const RepairsContainer = () => {
    const { loggedIn } = useContext(DisperseInfo)
    const design = useDesign()
    const [displayForm, setDisplayForm] = useState(false)

    const toggleDisplay = () => setDisplayForm(!displayForm)

    const displayContainer = displayForm == true ? <RepairForm toggle={toggleDisplay} /> : <Repairs />
    if (loggedIn){
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
    } else {
      return (
        <Login />
      )
    }
  
}

export default RepairsContainer