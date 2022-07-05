import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import { Link } from 'react-router-dom'

const Items = () => {
  const items = useSelector(state => state.items.items)

  const displayItems = items.map(i => <Item key={i.id} item={i} />)
  return (
    <div>
      <Link to="/items/new"><button>Add New Item</button></Link>
      {displayItems}
    </div>
  )
}

export default Items
