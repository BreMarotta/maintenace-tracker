import React from 'react';
import { Link } from 'react-router-dom';
import { RepairCard } from '../../Styles/Cards.style';
import { Button, StyledLink } from '../../Styles/Styled';
import { useDispatch, useSelector } from 'react-redux';

const Repair = (props) => {
  const dispatch = useDispatch()
  const people = useSelector((state) =>
    state.people.people
  )
  const items = useSelector((state) => state.items.items)
  const parts = useSelector((state) => state.parts.parts)

  const person  = people.find(y => y.id === props.repair.person_id)

  const thing = props.repair.repairable_type == "Item" ? items.find(x => x.id === props.repair.repairable_id) : parts.find(x => x.id === props.repair.repairable_id)
  
  const p = props.repair.repairable_type == "Part" ? items.find(x => x.id === thing.item_id) : "repair on item"

  const complete = props.repair.date !== null ? `Completed on ${props.repair.date}` : "" 

  return ( 
    <RepairCard  accent={person ? person.color : "black"} background={person.current == false || null  ? "Gainsboro" : "white"}>
        <div>
          <h2>{p.name ? <div><span>{p.name} - {thing.name}</span></div> : thing.name}</h2>
          <h4>{props.repair.title == "" ? "" : `${props.repair.title}`}</h4>
          <div>
            {props.repair.complete == false || null ? "Ongoing Repair"  : complete}
            <br/>
            {props.repair.cost == "" ? "" : `Cost: $${props.repair.cost}`}
          </div>

          <h5>{person ? `Repair by: ${person.name}` : ""}</h5>
          <Button backgroundColor="black"><Link to={`/repairs/${props.repair.id}/update`} ><StyledLink>Update Repair Info</StyledLink></Link></Button>
        </div>
    </RepairCard>
  )
}

export default Repair