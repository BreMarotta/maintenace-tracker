import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemForm from './ItemForm';

const ItemsDropDown = (props) => {
    const items = useSelector(state => state.items.items)
    const [showForm, setShowForm] = useState(false)

    const dropDown = items.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <ItemForm toggle={toggle} /> : ""

    const handleItemSelect = (e) => {
        e.target.value == "add" ? toggle() : props.handleRepairableSelect("repairable_id", e.target.value, "Item")
    }

    const d = props.upItem ? <option defaultValue={props.upItem.id}>{props.upItem.name}</option> : <option defaultValue="">Select Item from List</option>

  return (
    <div>
        <label>Item: </label>
            <select onChange={handleItemSelect}>
                {d}
                {dropDown}
                <option value="add" key="addItem">Add New Item</option>
            </select>
            {formFlag}
    </div>
  )
}

export default ItemsDropDown