import React from 'react'
import './BasketLand.css'
// import { Link } from 'react-router-dom'
import {search, truck, credit, gift, shopping} from '../../images'
import { BiStoreAlt } from "react-icons/bi";

export default function Landing() {
  return (
    <div className='landing1'>
      <div className=' landwrapp1'>
        <div className='landText landText1'>
          <h2 className='landtext1'>Good Evening, Laura!</h2> 

         {/*} <div className='search'>
            <input className='input' type='text' placeholder='search' />
            <img src={search} alt='search-icon' />
            </div> */}
          
        </div>

                          {/**Card Section */}

        <div className='landgroup-2'>
            <div className='card01'>
            
            <div className='transit1'>
              <div className='transit-group1'>
                <div className='icon-d1'>
                  <img className='icon-inner1' src={truck} alt='truck' />
               </div>

              <span className='transit-span1'>In-Transit Jobs</span>
              <h3 className='transit-text1'>0</h3>
            </div>
          </div>

        </div>

            <div className='card02'>
            
            <div className='transit1'>
              <div className='transit-group1'>
                <div className='icon-d1'>
                  <img className='icon-inner1' src={credit} alt='truck' />
               </div>

              <span className='transit-span1'>Total Paid</span>
              <h3 className='transit-text1'>$0.00</h3>
            </div>
          </div>

         </div>

           
        </div>
      
        {/**Basket / CreateBasket Section */}
        <div className='content1'>
            <h4 className='basket-text1'>Baskets</h4>
            <div className='creatBasket1'>
              <a href='/basket'  className='create-text1'>Create Basket</a>
            </div>
        </div>

        {/**Paid, Pending and Complete link */}
        <div className='general2'>
            <a className='paid1' href='/'>Paid</a>
            <a className='pending1' href='/'>Pending</a>
            <a className='completed1' href='/'>Completed</a>
        </div>

        {/** Icons  */}
        <div>
          <div className='paid-basket1'>
            <BiStoreAlt className='icon02' />
          </div>
          <p className='paid-text1'>No Paid Baskets, yet!</p>
        </div>
        
        
      </div>
    </div>
  )
}
