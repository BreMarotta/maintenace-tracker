import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ItemForm from './ItemForm';
import { deleteItem, deleteItemFront } from './itemsSlice';
import { DisperseInfo } from '../../Disperse';
import PartsContainer from '../parts/PartsContainer';
import { initParts } from '../parts/partsSlice';
import { Button, StyledBackground, Banner } from '../../Styles/Styled';
import { ShowGrid } from '../../Styles/Cards.style';
import { useDesign } from '../designs/useDesign';



const ItemShow = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const design = useDesign()
  const { loggedIn } = useContext(DisperseInfo)

  const [item, setItem] = useState({})
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (params.id != "new"){
      fetch(`/api/items/${params.id}`)
      .then(res => res.json())
      .then(data => {
      if (!data.error && !data.errors){
        dispatch(initParts(data.parts))
        setItem(data)
        setError(false)
      } else {
        setError(true)
      }
    })
  } 
  }, [params])

  const toggle = () => {setShowForm(!showForm)}

  const updateItem = (obj) => {
    setItem(obj)
  }

  const handleDelete = () => {
    dispatch(deleteItem(item))
    dispatch(deleteItemFront(item.id))
    history.push('/items')
  }

  const display = showForm == true ? <ItemForm item={item} toggle={toggle} updateItem={updateItem} /> : 
    <ShowGrid accent={design.accent}>
      <div>
        <h5>
          {item.year ? <span>Year: {item.year}<br/></span> : ""} 
          {item.make ? <span>Make: {item.make}<br/></span> : ""}
          {item.model ? <span>Model: {item.model}<br/></span> : ""}
        </h5>
          {item.warrenty ? <p>Warrenty Info: {item.warrenty}<br/></p> : ""}
          {item.purchase_year ? <p>Purchased: {item.purchase_year}<br/></p> : ""}
      </div>
      <img src={item.img} alt="No Image Available" />
      <Button backgroundColor={design.main} onClick={toggle}>Update</Button>
      <Button backgroundColor={design.main} onClick={handleDelete}>Delete</Button>
    </ShowGrid>


  if (loggedIn && !error && params.id != "new") {
    return (
    <>

      <StyledBackground backgroundColor={design.background}> 
        <Banner main={design.main}>{item.name}</Banner>

            {display}
      </StyledBackground>
      <PartsContainer />

        
        
    </>
  )} else if (error) {
    return (
      <div>
        <h3 className="unauthorized"> Not Authorized - You do not have access to this person or their information </h3>
      </div>
    )
  }
  
}

export default ItemShow
