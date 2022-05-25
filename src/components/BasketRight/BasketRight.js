import React from 'react'
import './BasketRight.css'
import {arrow1, arrow2, coconut, shopping} from '../../images'

export default function rightSidebar() {
  return ( 
    <div className='rightbar1'>
      <div className='rightwrapper'>
      {/* Head tag */}
        <div className='topbar'>

          <img className='rightIcon' src={arrow1} alt='left facing arrow' />
          <h2 className='hcart'>My Cart</h2>
          
          <div className='shop-content'>
            <div className='shop'>
              <img className='shop-icon' src={shopping} alt='shop-icon' />
            </div>
            <div className='small-shop'>
              <span className='small-icon'>4</span>
            </div>
          </div>
          
        </div>

        {/** Coconut Section */}
        <div className='cocoTag'></div>

      </div>

    </div>
  )
}