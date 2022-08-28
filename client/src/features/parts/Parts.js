import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import Part from './Part';
import PartForm from './PartForm';
import { DisperseInfo } from '../../Disperse';
import { Grid } from '../../Styles/Cards.style';

const Parts = ({ item }) => {
    const { loggedIn } = useContext(DisperseInfo)
    const [showForm, setShowForm] = useState(false)
    const [formPart, setFormPart] = useState({})
    const parts = useSelector(state => state.parts.parts)

    const fParts = item ? parts.filter(p => p.item_id == item.id) : parts

    const toggleForm = (part) => {
        setFormPart(part)
        setShowForm(!showForm)
    }

    const displayParts = fParts.map(p => <Part key={p.id} part={p} toggleForm={toggleForm} />) 
        

    if (loggedIn){
        return (
            !showForm ? <Grid>{displayParts}</Grid> : <PartForm part={formPart} toggleForm={toggleForm}/>
        
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