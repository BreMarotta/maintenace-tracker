// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import CategoryForm from '../categories/CategoryForm'
// import ItemForm from '../items/ItemForm'
// import LocationForm from '../locations/LocationForm'
// import PersonForm from '../people/PersonForm'

// const DropDown = (props) => {
//     const { type, handleSelect } = props
//     // console.log(type)

//     // const x = useSelector(state => state.type.type)
//     // console.log(x)
//     const categories = useSelector(state => state.categories.categories)
//     const loc = useSelector(state => state.locations.locations)
//     const items = useSelector(state => state.items.items)
//     const people = useSelector(state => state.people.people)
//     const [showForm, setShowForm] = useState(false)


//     // const dropDown = {
//     //     if(type = "categories"){
//     //         categories.map(y => <option value={y.id} key={y.id}>{y.name}</option>);
//     //     } else if(type = "items"){
//     //         items.map(y => <option value={y.id} key={y.id}>{y.name}</option>)
//     //     } else if(type = "locations"){
//     //         loc.map(y => <option value={y.id} key={y.id}>{y.name}</option>);
//     //     } else if(type = "people"){
//     //         people.map(y => <option value={y.id} key={y.id}>{y.name}</option>);
//     //     } else {

//     //     }
//     //     }




//     const toggle = () => setShowForm(!showForm)

//     // const formFlag = () => {
//     //     if(showForm == true){
//     //         switch(x){
//     //             case "categories":
//     //                 <CategoryForm toggle={toggle}/>;
//     //                 break;
//     //             case "items":
//     //                 <ItemForm toggle={toggle} />;
//     //                 break;
//     //             case "locations":
//     //                 <LocationForm toggle={toggle} />;
//     //                 break;
//     //             case "people":
//     //                 <PersonForm toggle={toggle} />;
//     //                 break;
//     //             default:
//     //                 break;
//     //         }
//     //     } else {
            
//     //     }
//     // }

//     const handleDropSelect = (e) => {
//         e.target.value == "add" ? toggle() : props.handleSelect(e.target.value)
//     }

//   return (
//     <div>
//         <label>:</label>
//             <select onChange={handleDropSelect}>
//                 <option defaultValue="None">Select from List</option>
//                 {/* {dropDown} */}
//                 <option value="add" key="add">Add </option>
//             </select>
//             {/* {formFlag} */}
//     </div>
//   )
// }

// export default DropDown