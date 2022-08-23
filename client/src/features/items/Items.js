import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import { Link } from 'react-router-dom'
import { DisperseInfo } from '../../Disperse'
import { useDesign } from '../designs/useDesign'
import { StyledBackground, Button } from '../../Styles/Styled'
import { PersonGrid } from '../../Styles/Cards.style'
import Login from '../settings/Login'

const Items = () => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const items = useSelector(state => state.items.items)

  const displayItems = items.map(i => <Item key={i.id} item={i} />)
  
  if (loggedIn){ 
    return (
    <StyledBackground backgroundColor={design.background}>
      <Link to="/items/new"><Button backgroundColor={design.main}>Add New Item</Button></Link>
      <br/>
      <PersonGrid>
        {displayItems}
      </PersonGrid>
    </StyledBackground>
  )
  } else {
    return (
      <Login />
    )
  }
  
}

export default Items
