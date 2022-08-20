import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import RepairForm from './RepairForm'
import Repairs from './Repairs'
import { useDesign } from '../designs/useDesign'
import { StyledBackground, Button } from '../../Styles/Styled'
import { DisperseInfo } from '../../Disperse';
import Login from '../settings/Login'

const RepairsContainer = () => {
    const { loggedIn } = useContext(DisperseInfo)
    const design = useDesign()

    if (loggedIn){
      return (
        <StyledBackground backgroundColor={design.background}>
            <Button backgroundColor={design.main}><Link to={`/repairs/new`}>Log New Repair</Link></Button>
            <Repairs />
        </StyledBackground>
      )
    } else {
      return (
        <Login />
      )
    }
  
}

export default RepairsContainer