import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import { Link } from 'react-router-dom'
import { DisperseInfo } from '../../Disperse'
import { useDesign } from '../designs/useDesign'
import { StyledBackground, Button } from '../../Styles/Styled'
import { PersonGrid } from '../../Styles/Cards.style'
import Login from '../settings/Login'

const Items = (props) => {
  const { loggedIn } = useContext(DisperseInfo)
  const design = useDesign()
  const items = useSelector(state => state.items.items)

  const fItems = props.location ? items.filter(x => x.location_id == props.location.id) 
    : props.category ? items.filter(x => x.category_id == props.category.id) 
    : items
    
  const displayItems = fItems.map(i => <Item key={i.id} item={i} />)

  const add = props.location ? "" :  <><Link to="/items/new"><Button backgroundColor={design.main}>Add New Item</Button></Link>
  <br/></>
  
  if (loggedIn){ 
    return (
    <StyledBackground backgroundColor={design.background}>
      {add}
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
