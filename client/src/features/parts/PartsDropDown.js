import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PartForm from './PartForm'

const PartsDropDown = (props) => {
    const parts = useSelector(state => state.parts.parts)
    const [showForm, setShowForm] = useState(false)


    const filteredParts = props.itemId !== "" ? parts.filter(x => x.item_id == props.itemId) : parts

    const dropDown = filteredParts.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <PartForm toggle={toggle} itemId={props.itemId}/> : ""

    const handlePartSelect = (e) => {
        e.target.value == "add" ? toggle() : props.handleRepairableSelect("repairable_id", e.target.value, "part")
    }

  return (
    <div>
        <label>Part: </label>
            <select onChange={handlePartSelect}>
                <option defaultValue="None">
                    Select Part from List
                </option>
                {dropDown}
                <option value="add" key="addPart">Add New Part</option>
            </select>
            {formFlag}
    </div>
  )
}

export default PartsDropDown