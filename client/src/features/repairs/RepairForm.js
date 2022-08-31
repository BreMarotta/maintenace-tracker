import React, { useState, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addRepair, updateRepair } from './repairsSlice'
import { DisperseInfo } from '../../Disperse'
import { Button, StyledBackground } from '../../Styles/Styled'
import { Form, ErrorLi } from '../../Styles/Form.style'
import { useDesign } from '../designs/useDesign'
import PeopleDropDown from '../people/PeopleDropDown'
import ItemsDropDown from '../items/ItemsDropDown'
import PartsDropDown from '../parts/PartsDropDown'

const RepairForm = () => {
    const { loggedIn } = useContext(DisperseInfo)
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const design = useDesign();
    const [itemId, setItemId] = useState("")
    const [partId, setPartId] = useState("")
    const [upItem, setUpItem] = useState({});
    const [upPart, setUpPart] = useState({});
    const [addSummary, setAddSummary] = useState(false)
    const [repairError, setRepairError] = useState(false)
    
    const [repairObj, setRepairObj] = useState({
        id: "",
        repairable_id: "",
        repairable_type: "",
        person_id: "",
        date: "",
        complete: false,
        cost: "",
        title: "",
        summary: "",
    })

    const parts = useSelector((state) => state.parts.parts)
    const items = useSelector((state) => state.items.items)

    useEffect(() => {
        if(upRepair){
            setRepairObj(upRepair)
            if(upRepair.repairable_type === "Part"){
                const p = parts.find(x => x.id === upRepair.repairable_id)
                setUpPart(p)
                const i = items.find(x => x.id === p.item_id)
                setItemId(i.id)
                setUpItem(i)
            }else if(upRepair.repairable_type === "Item"){
                const i = items.find(x => x.id === upRepair.repairable_id)
                setItemId(i.id)
                setUpItem(i)
            }
        }
    }, [params])

    const repairs = useSelector((state) => state.repairs.repairs)
    const upRepair = repairs.find(x => x.id == params.id)

    const errors = useSelector(state => state.repairs.errors);
    const errorLis = errors.map(e => <ErrorLi key={e}>{e}</ErrorLi>)

    const handleSelect = (type, id) => {
        const newObj = {...repairObj, [type]: id}
        setRepairObj(newObj)
    }
    const handleRepairableSelect = (type, id, x) => {
        const newObj = {...repairObj, [type]: id, ["repairable_type"]: x}
        setRepairObj(newObj)
        setRepairError(false)
        if(x == "Item"){
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
        const newObj = {...repairObj, ["complete"]: !repairObj.complete}
        setRepairObj(newObj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!repairObj.repairable_id || !repairObj.repairable_type){
            console.log("No id")
            setRepairError(true)
        } else {
            setRepairError(false)
            dispatch(addRepair(repairObj))
            .then(data => {
                if(!data.payload.errors){
                   history.push('/repairs') 
                }
            })  
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateRepair(repairObj))
        history.push('/repairs')
    }

    const setupDate = repairObj.complete ? 
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

    const buttonText = upRepair !== undefined || null ? "Save Changes" : "Add Repair"

    const submitFunction = upRepair !== undefined || null ? handleUpdate : handleSubmit

    const upPerson = upRepair !== undefined || null ? upRepair.person_id : ""

    const pItem = upRepair !== undefined || null ? upItem : ""

    const pPart = upRepair !== undefined || null ? upPart : ""

    if (loggedIn) {
        return (
            <StyledBackground backgroundColor={design.background}>
                <PeopleDropDown handleSelect={handleSelect} upPerson={upPerson}/> 
                <ItemsDropDown handleRepairableSelect={handleRepairableSelect} upItem={pItem}/>
                <PartsDropDown handleRepairableSelect={handleRepairableSelect} itemId={itemId} upPart={pPart}/>

                <Form onSubmit={submitFunction}>
                    {repairError ? <ErrorLi>Must select an Item or Part for the Repair</ErrorLi> : ""}
                    {errorLis}
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
                            checked={repairObj.complete}
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