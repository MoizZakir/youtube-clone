import React from 'react'
import '../Styles/navbar.css'

const Sidebaritems = ({logo,name}) => {
  return (
    <div className='sidebar-item'>
    {logo}<p>{name}</p>

    </div>
  )
}

export default Sidebaritems