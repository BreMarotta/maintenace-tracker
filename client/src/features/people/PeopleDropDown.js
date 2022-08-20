import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PersonForm from './PersonForm'

const PeopleDropDown = (props) => {
    const people = useSelector(state => state.people.people)
    const [person, setPerson] = useState("")
    const [showForm, setShowForm] = useState(false)

    const p = props.upPerson ? people.find(x => x.id === props.upPerson) : ""

    const dropDown = people.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <PersonForm toggle={toggle} /> : ""

    const handlePersonSelect = (e) => {
        e.target.value == "add" ? toggle() : props.handleSelect("person_id", e.target.value)
    }

    const d = p ? <option defaultValue={p.id}>{p.name}</option> : <option defaultValue="">Select from List</option>

    
  return (
    <div>
        <label>People: </label>
            <select onChange={handlePersonSelect}>
                {d}
                {dropDown}
                <option value="add"
                key="addPerson">Add Person</option>
            </select>
            {formFlag}
    </div>
  )
}

export default PeopleDropDown