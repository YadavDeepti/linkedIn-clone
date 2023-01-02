import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'

function HeaderOption({ avataar, Icon, title}) {
  return (
    <div className='headeroption'>
      { Icon && <Icon className='headeroption__icon'/>}
      { avataar && <Avatar className="headeroption__icon" src={avataar}/>}
      <h3 className='headeroption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
