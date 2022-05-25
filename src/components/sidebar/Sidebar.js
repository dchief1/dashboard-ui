import React from 'react'
import './Sidebar.css'
// import  {Link } from 'react-router-dom'
import {vector, vector1, vector2, vector3, vector4, vector5, vector6, userIcon, shopping, history} from '../../images'
// import { MdOutlineLogout } from "react-icons/md";


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>

        {/*^^^^^^^^^^^^^^ Logo section ^^^^^^^*/}
        <div className='logo'>
          <img className='log1' src={vector1} alt='logo' /> 
          <img className='log2' src={vector2} alt='logo' /> 
          <img className='log3' src={vector3} alt='logo' /> 
          <img className='log4' src={vector3} alt='logo' /> 
          <img className='log5' src={vector4} alt='logo' /> 
          <img className='log6' src={vector6} alt='logo' /> 
          <img className='log7' src={vector5} alt='logo' /> 
        </div>

          {/*^^^^^^^^^^^^^^ Profile Section ^^^^^^^*/}
          <div className='proTag'>
            <div className='profile'>
              <img className='icon-profile' src={userIcon} alt='user-icon' />
              <a href='/' className='text-profile'>Profile</a>
            </div>

            <div className='basket'>
              <div className='basket-group'>
                <img className='basket-icon' src={shopping} alt='shopping-basket-icon' />

                  <a href='/basket' className='basket-span'>Basket</a>

              </div>
            </div>

            

              <div className='profile'>
                <img className='icon-profile' src={history} alt='order-history' />
                <a href='/' className='text-profile'>Order History</a>
              </div>

          </div>

        {/*^^^^^^^^^^^^^^ Logout Section ^^^^^^^*/}
          <div className='logout-section'>

            <div className='logout-1'>
              <h2>LE</h2>
            </div>

            <h2 className='logHtag'>Laura Edson</h2>
            <span className='loghtag'>lauraedson@work.com</span>

            <div className='logout-icon'>
              <img  src={vector} alt='logout' />
            </div>

            

          </div>
        </div>
    </div>
  )
}
