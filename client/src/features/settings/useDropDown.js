// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

// export const useDropDown = (type, handleSelect) => {
//     const type = useSelector(state => state.type.type)

//     const dropDown = type.map(y => <option value={y.id} key={y.id}>{y.name}</option>)

//     const toggle = () => setShowForm(!showForm)

//     const formFlag = showForm == true ? {
//         // switch(type){
//         //     case: 
//         // }
//     }

//     const handleSelect = (e) => {
//         e.target.value == "add" ? toggle() : handleSelect(e.target.value)
//     }

//   return (
//     <div>
//         <label>{type}:</label>
//             <select onChange={handleSelect}>
//                 <option defaultValue="None">Select from List</option>
//                 {dropDown}
//                 <option value="add" key="add">Add {type}</option>
//             </select>
//             {formFlag}
//     </div>
//   )
// }
