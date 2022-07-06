import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import { Link } from 'react-router-dom'
import { DisperseInfo } from '../../Disperse'

const Items = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const items = useSelector(state => state.items.items)

  const displayItems = items.map(i => <Item key={i.id} item={i} />)
  
  if (loggedIn == "true"){ 
    return (
    <div>
      <Link to="/items/new"><button>Add New Item</button></Link>
      {displayItems}
    </div>
  )
  } else {
    return (
      <div>
        <h3 className="unauthroized"> Not Authorized - Please Login or Signup</h3>
      </div>
    )
  }
  
}

export default Items
