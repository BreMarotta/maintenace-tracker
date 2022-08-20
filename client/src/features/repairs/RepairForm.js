import React, { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addRepair } from './repairsSlice'
import { DisperseInfo } from '../../Disperse'
import { Button, StyledBackground } from '../../Styles/Styled'
import { Form } from '../../Styles/Form.style'
import { useDesign } from '../designs/useDesign'
import PeopleDropDown from '../people/PeopleDropDown'
import ItemsDropDown from '../items/ItemsDropDown'
import PartsDropDown from '../parts/PartsDropDown'

const RepairForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch();
    const params = useParams();
    const design = useDesign();
    const [itemId, setItemId] = useState("")
    const [partId, setPartId] = useState("")
    const [repairableId, setRepairableId] = useState("")
    const [repairableType, setRepairableType] = useState("")
    const [showDrop, setShowDrop] = useState(false)
    const [repairComplete, setRepairComplete] = useState(false)
    const [addSummary, setAddSummary] = useState(false)

    const x = (props.repair !== undefined || null ? props.repair : "")
    const repairable = (props.repair !== undefined || null ? props.repair.repairable_id : "")
    const type = (props.repair !== undefined || null ? props.repair.repairable_type : "")
    const person = (props.repair !== undefined || null ? props.repair.person_id : "")
    const d = (props.repair !== undefined || null ? props.repair.date : "")
    const comp = (props.repair !== undefined || null ? props.repair.complete : repairComplete)
    const c = (props.repair !== undefined || null ? props.repair.cost : "")
    const t = (props.repair !== undefined || null ? props.repair.title : "")
    const s = (props.repair !== undefined || null ? props.repair.summary : "")


    const [repairObj, setRepairObj] = useState({
        id: x,
        repairable_id: repairableId,
        repairable_type: repairableType,
        person_id: person,
        date: d,
        complete: comp,
        cost: c,
        title: t,
        summary: s,
    })

    const errors = useSelector(state => state.repairs.errors);
    const errorLis = errors.map(e => <li key={e}>{e}</li>)

  

    const handleSelect = (type, id) => {
        const newObj = {...repairObj, [type]: id}
        setRepairObj(newObj)
    }
    const handleRepairableSelect = (type, id, x) => {
        const newObj = {...repairObj, [type]: id, ["repairable_type"]: x}
        setRepairObj(newObj)
        if(x == "item"){
            setItemId(id)
        } else {
            setPartId(id)
        }
    }

    const handleChange = (e) => {
        const newObj = {...repairObj, [e.target.name]: e.target.value}
        setRepairObj(newObj)
    }
    const handleDateAndComplete = (e) => {
        const newObj = {...repairObj, ["complete"]: !repairComplete}
        setRepairComplete(!repairComplete)
        setRepairObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(repairObj)
        dispatch(addRepair(repairObj))
        props.toggle()
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        
    }

    const partDrop = showDrop ? <PartsDropDown handleRepairableSelect={handleRepairableSelect} itemId={itemId}/> : ""
    const setupDate = repairComplete ? 
        <div>
            <label>Date Completed</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleChange}
                    value={repairObj.date} 
                    />
                <br/>
        </div> : ""

    const setupSummary = addSummary ? 
        <>
            <label>Summary</label>
                <input
                    type="text"
                    id="summary"
                    name="summary"
                    value={repairObj.summary}
                    onChange={handleChange} />
                <br/>
        </> : ""

    const buttonText = props.repair !== undefined || null ? "Save Changes" : "Add Repair"

    const submitFunction = props.repair !== undefined || null ? handleUpdate : handleSubmit

    

    if (loggedIn) {
        return (
            <StyledBackground backgroundColor={design.background}>
                <PeopleDropDown handleSelect={handleSelect} />
                <ItemsDropDown handleRepairableSelect={handleRepairableSelect} />
                <label>Specify Part?</label>
                <input
                    type="checkbox"
                    checked={showDrop}
                    onChange={(e) => setShowDrop(!showDrop)} />
                {partDrop}

                <Form onSubmit={submitFunction}>
                    <label>Label: </label>
                        <input
                                type="text"
                                id="title"
                                name="title"
                                value={repairObj.title}
                                onChange={handleChange} />
                            <br/>
                    <label>Repair Complete?</label>
                        <input
                            type="checkbox"
                            checked={repairComplete}
                            onChange={handleDateAndComplete} />
                        {setupDate}
                    <label>Cost of Repair: </label>
                        <input
                            type="text"
                            id="cost"
                            name="cost"
                            value={repairObj.cost}
                            onChange={handleChange} />
                        <br/>
                    <label>Add Summary?</label>
                        <input  
                            type="checkbox"
                            checked={addSummary}
                            onChange={(e) => setAddSummary(!addSummary)} />
                        {setupSummary}

                    <Button backgroundColor={design.accent} type="submit">{buttonText}</Button>
                </Form>

            </StyledBackground>
        )
        
    } else {
        return (
            <div>
              <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
            </div>
        ) 
    }
  
}

export default RepairForm