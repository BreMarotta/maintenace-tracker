import React, { useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addRepair } from './repairsSlice'
import { DisperseInfo } from '../../Disperse'
import { Button, StyledBackground } from '../../Styles/Styled'
import { Form } from '../../Styles/Form.style'
import { useDesign } from '../designs/useDesign'
import { DatePicker } from 'react-datepicker'
import PeopleDropDown from '../people/PeopleDropDown'

const RepairForm = (props) => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch();
    const params = useParams();
    const design = useDesign();

    const x = (props.repair !== undefined || null ? props.repair : "")
    const part = (props.repair !== undefined || null ? props.repair.part_id : "")
    const person = (props.repair !== undefined || null ? props.repair.person_id : "")
    const d = (props.repair !== undefined || null ? props.repair.date : "")
    const comp = (props.repair !== undefined || null ? props.repair.complete : "")
    const c = (props.repair !== undefined || null ? props.repair.cost : "")
    const t = (props.repair !== undefined || null ? props.repair.title : "")
    const s = (props.repair !== undefined || null ? props.repair.summary : "")

    const [repairObj, setRepairObj] = useState({
        id: x,
        part_id: part,
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

    const handleChange = (e) => {
        const newObj = {...repairObj, [e.target.name]: e.target.value}
        setRepairObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(repairObj)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
    }

    const buttonText = props.repair !== undefined || null ? "Save Changes" : "Add Repair"

    const submitFunction = props.repair !== undefined || null ? handleUpdate : handleSubmit

    

    if (loggedIn) {
        return (
            <StyledBackground backgroundColor={design.background}>
                <Form onSubmit={submitFunction}>
                    <label>Date Completed</label>
                        {/* <DatePicker selected={repairObj.date} onChange={(e) => {console.log(e)}}/> */}
                        <br/>
                    <label>Cost of Repair</label>
                        <input
                            type="text"
                            id="cost"
                            name="cost"
                            value={repairObj.cost}
                            onChange={handleChange} />
                        <br/>
                    <label>Summary</label>
                        <input
                            type="text"
                            id="summary"
                            name="summary"
                            value={repairObj.summary}
                            onChange={handleChange} />
                        <br/>
                    <Button backgroundColor={design.accent} type="submit">{buttonText}</Button>
                </Form>
                <PeopleDropDown handleSelect={handleSelect} />
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