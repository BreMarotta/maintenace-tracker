import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PersonForm from './PersonForm'

const PeopleDropDown = (props) => {
    const people = useSelector(state => state.people.people)
    const [person, setPerson] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dropDown = people.map(x => <option value={x.id} key={x.id}>{x.name}</option>)

    const toggle = () => setShowForm(!showForm)

    const formFlag = showForm == true ? <PersonForm toggle={toggle} /> : ""

    const handlePersonSelect = (e) => {
        e.target.value == "add" ? toggle() : props.handleSelect("person_id", e.target.value)
    }

    
  return (
    <div>
        <label>People: </label>
            <select onChange={handlePersonSelect}>
                <option defaultValue="None">Select from List</option>
                {dropDown}
                <option value="add"
                key="addPerson">Add Person</option>
            </select>
            {formFlag}
    </div>
  )
}

export default PeopleDropDown