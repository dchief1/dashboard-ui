import React from 'react'
import Landing from '../../pages/landing/Landing'
import Sidebar from '../sidebar/Sidebar'
import RightSidebar from '../rightSidebar/RightSidebar'

const LandingLayout = () => {
  return (
    <div className='container'>
        <Sidebar />
        <Landing />
        <RightSidebar />
    </div>
  )
}

export default LandingLayout