import React from 'react'

const ColorOptions = () => {
    const colorsArray = [
        {name: "default", color: "DFCFBE"},
        {name: "red", color: "BC243C"}, 
        {name: "orange", color: "DD4124"}, 
        {name: "yellow", color: "EFC050"}, 
        {name: "green", color: "009B77"},
        {name: "blue", color: ""},
        {name: "purple", color: ""},
        {name: "pink", color: ""}, 
        {name: "gray", color: ""},
        {name: "", color: ""},
        {name: "", color: ""},
    ]
    const dropDown = colorsArray.map(c => <option value={c.color} key={c.color}>{c.name}</option> )
  return (
    <select>{dropDown}</select>
  )
}

export default ColorOptions
