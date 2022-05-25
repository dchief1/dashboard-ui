import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import BasketLand from '../../pages/BasketLanding/BasketLand'
import BasketRight from '../BasketRight/BasketRight'


const BasketLayout = () => {
  return (
    <div className='container'>
        <Sidebar />
        <BasketLand />
        <BasketRight />
    </div>
  )
}

export default BasketLayout