import React from 'react'
import './Landing.css'
// import { Link } from 'react-router-dom'
import {search, truck, credit, gift, shopping} from '../../images'
import { BiStoreAlt } from "react-icons/bi";

export default function Landing() {
  return (
    <div className='landing'>
      <div className='landwrapp'>
        <div className='landText'>
          <h2 className='landtext'>Good Evening, Laura!</h2>

        {/* Search Basket Starts*/}   
         <div className='search'>
          <div className='search-wrap'>
            
              <img className='search-icon' src={search} alt='search-icon' />
              <input className='input-des' type='text' placeholder='Search Basket' />
            
          </div>
         </div>
        {/* Search Basket Ends*/} 
          
        </div>

                          {/**Card Section */}

        <div className='landgroup-1'>
            <div className='card1'>
            
            <div className='transit'>
              <div className='transit-group'>
                <div className='icon-d'>
                  <img className='icon-inner' src={truck} alt='truck' />
               </div>

              <span className='transit-span'>In-Transit Jobs</span>
              <h3 className='transit-text'>0</h3>
            </div>
          </div>

        </div>

            <div className='card2'>
            
            <div className='transit'>
              <div className='transit-group'>
                <div className='icon-d'>
                  <img className='icon-inner' src={credit} alt='truck' />
               </div>

              <span className='transit-span'>Total Paid</span>
              <h3 className='transit-text'>$0.00</h3>
            </div>
          </div>

         </div>

            <div className='card3'>
            
            <div className='transit'>
              <div className='transit-group'>
                <div className='icon-d'>
                  <img className='icon-inner' src={gift} alt='truck' />
               </div>

              <span className='transit-span3'>Completed Jobs</span>
              <h3 className='transit-text3'>0</h3>
            </div>
          </div>

            </div>
        </div>
      
        {/**Basket / CreateBasket Section */}
        <div className='content'>
            <h4 className='basket-text'>Baskets</h4>
            <div className='creatBasket'>
              <a href='/basket'  className='create-text'>Create Basket</a>
            </div>
        </div>

        {/**Paid, Pending and Complete link */}
        <div className='general'>
            <a className='paid' href='/'>Paid</a>
            <a className='pending' href='/'>Pending</a>
            <a className='completed' href='/'>Completed</a>
        </div>

        {/** Icons  */}
        <div>
          <div className='paid-basket'>
            <BiStoreAlt className='icon2' />
          </div>
          <p className='paid-text'>No Paid Baskets, yet!</p>
        </div>
        
        <div className='shopTag'>
          <div className='shop'>
            <img className='shop-icon' src={shopping} alt='shop-icon' />
          </div>
          <div className='small-shop'>
            <span className='small-icon'>4</span>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}
