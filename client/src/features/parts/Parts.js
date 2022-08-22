import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import Part from './Part';
import { DisperseInfo } from '../../Disperse';
import { Grid } from '../../Styles/Cards.style';

const Parts = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const parts = useSelector(state => state.parts.parts)

    const fParts = props.parts ? props.parts : parts

    const displayParts = fParts.map(p => <Part key={p.id} part={p} />)

    if (loggedIn){
        return (
        <Grid>{displayParts}</Grid>
        )  
    } else {
        return (
            <div>
            <h3 className="unauthorized"> Not Authorized - Please Login or Signup</h3>
            </div>
        ) 
    }
  
}

export default Parts