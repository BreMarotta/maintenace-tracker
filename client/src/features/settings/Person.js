import React from 'react'

const Person = ({ person }) => {
  return (
    <div style={{background: person.color}}>
        {person.name}
        {person.title}
    </div>
  )
}

export default Person