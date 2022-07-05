import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemForm from './ItemForm';

const ItemShow = () => {
  const params = useParams()

  const [item, setItem] = useState({})
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(`/items/${params.id}`)
    .then(res => res.json())
    .then(data => {
      if (!data.error && !data.errors){
        setItem(data)
        setError(false)
      } else {
        setError(true)
      }
    })
  }, [params])

  const toggle = () => {setShowForm(!showForm)}

  const updateItem = (obj) => {
    setItem(obj)
  }

  const displayUpdate = showForm == true ? <ItemForm item={item} toggle={toggle} updateItem={updateItem} /> : <div>map out item format here?</div>

  if (!error) {
    return (
    <div>
      <label>Update {item.name}</label>
        <input
        type="checkbox"
        checked={showForm}
        onChange={toggle}/>
        {displayUpdate}
    </div>
  )} 
  // else {
  //   return (
  //     <div>
  //       <h3 className="unauthorized"> Not Authorized - You do not have access to this person or their information </h3>
  //     </div>
  //   )
  // }
  
}

export default ItemShow
