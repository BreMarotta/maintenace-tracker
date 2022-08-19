import React from 'react';
import { RepairCard, Grid } from '../../Styles/Cards.style';
import { useDispatch, useSelector } from 'react-redux';

const Repair = (props) => {
  const dispatch = useDispatch()
  const people = useSelector((state) =>
    state.people.people
  )
  const items = useSelector((state) => state.items.items)
  const parts = useSelector((state) => state.parts.parts)

  const person  = people.find(y => y.id === props.repair.person_id)

  const thing = props.repair.repairable_type === "item" ? items.find(x => x.id === props.repair.repairable_id) : parts.find(x => x.id === props.repair.repairable_id)
  console.log(props.repair)

  return (
    <div>
        <RepairCard accent={person ? person.color : "black"}>
          <h3>{props.repair.title == "" ? "" : `${props.repair.title}`}</h3>
          <h3>{thing ? thing.name : ""}</h3>
          <span>
            {props.repair.complete == false || "null" ? "Ongoing Repair"  : `Completed on: ${props.repair.date}`}
            
            {props.repair.cost == "" ? "" : `Cost: ${props.repair.cost}`}
          </span>

          <h5>Repair by: {person ? person.name : ""}</h5>
        </RepairCard>
    </div>
  )
}

export default Repair