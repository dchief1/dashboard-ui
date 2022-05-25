import React from 'react'
import './RightSidebar.css'

export default function rightSidebar() {
  return (
    <div className='rightbar'>
      <div className='rightText1'>
        <h3 className='righthead1'>INVITES</h3>
        <p className='rightpag1'>You have no invites.</p>
      </div>

      <div className='bord1' />

      <div className='rightText1'>
        <h3 className='righthead2'>RECENT PAYMENTS</h3>
        <p className='rightpag2'>No Payment has been made.</p>
      </div>

      <div className='bord1' />

      <div className='rightText1'>
        <h3 className='righthead3'>PREVIOUS ORDERS</h3>
        <p className='rightpag3'>You have created no order.</p>
      </div>

    </div>
  )
}
