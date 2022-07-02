import React from 'react'

export const Location = ({ location }) => {
  return (
    <div>
        {location.name}
        {location.address}
        {location.address_2}
    </div>
  )
}
