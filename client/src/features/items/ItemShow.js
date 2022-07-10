import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ItemForm from './ItemForm';
import { deleteItem, deleteItemFront } from './itemsSlice';
import { DisperseInfo } from '../../Disperse';
import PartsContainer from '../parts/PartsContainer';
import { initParts } from '../parts/partsSlice';


const ItemShow = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const { loggedIn } = useContext(DisperseInfo)


  const [item, setItem] = useState({})
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    // if (loggedIn == "true" && params.id != "new"){
      fetch(`/items/${params.id}`)
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
  // } 
  }, [params])

  const toggle = () => {setShowForm(!showForm)}

  const updateItem = (obj) => {
    setItem(obj)
  }

  const display = showForm == true ? <ItemForm item={item} toggle={toggle} updateItem={updateItem} /> : <div className="showPage">
    <img style={{height: "350px", float: "right", paddingRight: "100px"}} src={item.img} alt="No Image Available" />
    <h2>{item.name}</h2>
    <h5>{item.year} {item.make} - {item.model}</h5>
    <p>Warrenty Info: {item.warrenty}</p>
    <p>Purchased: {item.purchase_year}</p>
    <p></p>
  </div>

  const handleDelete = () => {
    dispatch(deleteItem(item))
    dispatch(deleteItemFront(item.id))
    history.push('/items')
  }
  if (loggedIn && !error && params.id != "new") {
    return (
    <div>
      <PartsContainer />
      <label>Update {item.name}</label>
        <input
        type="checkbox"
        checked={showForm}
        onChange={toggle}/>
        {display}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={handleDelete}>Delete {item.name}</button>
    </div>
  )} else if (error) {
    return (
      <div>
        <h3 className="unauthorized"> Not Authorized - You do not have access to this person or their information </h3>
      </div>
    )
  }
  
}

export default ItemShow
