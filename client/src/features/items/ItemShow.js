import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemForm from './ItemForm';
import { DisperseInfo } from '../../Disperse';
import PartsContainer from '../parts/PartsContainer';
import { EditButton, StyledBackground, Banner } from '../../Styles/Styled';
import { ShowGrid } from '../../Styles/Cards.style';
import { useDesign } from '../designs/useDesign';
import Login from '../settings/Login';

const ItemShow = () => {
  const params = useParams()
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

  const display = showForm == true ? 
    <ItemForm item={item} toggle={toggle} updateItem={updateItem} /> 
    : error ?
    <div>
      <StyledBackground className="unauthorized"><strong> Not Authorized - You do not have access to this information </strong></StyledBackground>
    </div>
    : 
    <div>
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
      <br/>
      <br/>
      
    </ShowGrid>
    <br/>
    <PartsContainer item={item}/>
    </div>


  if (loggedIn && params.id != "new") {
    return (
    <>
      <StyledBackground backgroundColor={design.background}> 
        <Banner main={design.main}>
          <EditButton backgroundColor={design.main} onClick={toggle} side="right" accent={design.accent}>✎</EditButton>
          {item.name}
          <hr color={design.accent}/>   
        </Banner>
        {display}
      </StyledBackground>
    </>
  )} else if (loggedIn && params.id == "new"){
    return(
      <div>What?</div>
    )
  } else {
    return (
      <Login />
    )
  }
  
}

export default ItemShow
