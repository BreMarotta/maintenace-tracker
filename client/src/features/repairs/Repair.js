import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RepairCard } from '../../Styles/Cards.style';
import { Button, StyledLink, EditButton } from '../../Styles/Styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRepFront, deleteRepair } from './repairsSlice';

const Repair = (props) => {

  const people = useSelector((state) =>state.people.people)
  const items = useSelector((state) => state.items.items)
  const parts = useSelector((state) => state.parts.parts)
  const [del, setDel] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const person  = people.find(y => y.id === props.repair.person_id)

  const thing = props.repair.repairable_type == "Item" ? items.find(x => x.id === props.repair.repairable_id) : parts.find(x => x.id === props.repair.repairable_id)
  console.log("thing: ", thing)
  
  const p = props.repair.repairable_type == "Part" ? items.find(x => x.id === thing.item_id) : "repair on item"
console.log("p: ", p)

  const complete = props.repair.date !== null ? `Completed on ${props.repair.date}` : "" 

  const handleDelete = () => {
    console.log(props.repair)
    dispatch(deleteRepair(props.repair))
    .then(data => {
      if(!data.payload.errors && !data.payload.error){
        dispatch(deleteRepFront(props.repair))
        if(props.person){
          history.push(`/people/${props.person.id}`)
        }else {
           history.push('/repairs')
        }
      }
    })
  }

  const display = del ?
  <div>
    <p>Are you sure you want to delete <strong>{props.repair.title}</strong>?</p> 
    <Button backgroundColor="black" onClick={() => setDel(false)}>No</Button>
    <Button backgroundColor="black" onClick={handleDelete}>Confirm Delete</Button>
  </div>
  :
  <div>
    <EditButton backgroundColor={person.current == false || null  ? "Gainsboro" : "white"} accent="whitesmoke" side="right" onClick={() => setDel(!del)}>🗑️</EditButton>
    <br/>
    <h2>{p.name ? <div><span>{p.name} - {thing.name}</span></div> : thing.name}</h2>
    <h4>{props.repair.title == "" ? "" : `${props.repair.title}`}</h4>
    <div>
      {props.repair.complete == false || null ? "Ongoing Repair"  : complete}
      <br/>
      {props.repair.cost == null ? "" : `Cost: $${props.repair.cost}`}
    </div>

    <h5>{person ? `Repair by: ${person.name}` : ""}</h5>
    <Button backgroundColor={person.color ? person.color : "black"}><Link to={`/repairs/${props.repair.id}/update`} ><StyledLink>Update Repair Info</StyledLink></Link></Button>
  </div>

  return ( 
    <RepairCard  accent={person ? person.color : "black"} background={person.current == false || null  ? "Gainsboro" : "white"}>
      {display}
    </RepairCard>
  )
}

export default Repair