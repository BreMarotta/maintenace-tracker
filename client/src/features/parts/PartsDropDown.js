import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PartForm from './PartForm'

const PartsDropDown = (props) => {
    const parts = useSelector(state => state.parts.parts)
    const [s, setS] =useState(<option defaultValue="">Select Part from List</option>)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        if(props.upPart == ''){

        }else if(props.upPart.id){
            setS(<option defaultValue={props.upPart.id}>{props.upPart.name}</option>)
        }
    }, [props])

    const filteredParts = props.itemId !== "" ? parts.filter(x => x.item_id == props.itemId) : parts

    const dropDown = filteredParts.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <PartForm toggle={toggle} itemId={props.itemId}/> : ""

    const handlePartSelect = (e) => {
        e.target.value == "add" ? toggle() : props.handleRepairableSelect("repairable_id", e.target.value, "Part")
    }

  return (
    <div>
        <label>Part: </label>
            <select onChange={handlePartSelect}>
                {s}
                {dropDown}
                <option value="add" key="addPart">Add New Part</option>
            </select>
            {formFlag}
    </div>
  )
}

export default PartsDropDown