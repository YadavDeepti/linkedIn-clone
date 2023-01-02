import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
function recentItem(topic){
  return  <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
};

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1541932677804-0762b0b7bcd4?ixlib=rb-4.0.3&ixid=
                          MnwxMjA3fDB8MHxzZWFyY2h8MzQwfHxjb2xvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar className='sidebar__avataar' />
                <h2>Deepti Yadav</h2>
                <h4>deeptiyadav940@gmail.com</h4>
            </div>
            < div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className='sidebar__statNumber'>
                        500+
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>
                        2,456
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('javascript')}
                {recentItem('programming')}
                {recentItem('frontenddevelopment')}
            </div>
             
        </div>


    )
}

export default Sidebar
