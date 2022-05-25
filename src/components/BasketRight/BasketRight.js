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
        <div className='cocoTag'>
          <div className='cocowrap'>

            <div className='cocogroup'>

              <div className='coco-icon'>
                <img className='coco-label' src={coconut} alt='truck' />
              </div>

              <span className='coco-span'>Okazi Leaves</span>
              <h3 className='coco-text'>$0.00</h3>

            </div>

            <div className='coco-box'>
              <div className='box-wrap'>
                <h4 className='box-text'>1kg</h4>
                <img className='box-icon' src={arrow2} alt='truck' />
              </div>
            </div>

            <div className='coco-profile'>
              <span className='coco-pText'>M</span>
            </div>

          </div>
        </div>
      {/**Coco Tag Closed */}  

        {/** Coconut Section */}
        <div className='cocoTag cocoTag1'>
          <div className='cocowrap'>

            <div className='cocogroup'>

              <div className='coco-icon'>
                <img className='coco-label' src={coconut} alt='truck' />
              </div>

              <span className='coco-span'>Okazi Leaves</span>
              <h3 className='coco-text'>$0.00</h3>

            </div>

            <div className='coco-box'>
              <div className='box-wrap'>
                <h4 className='box-text'>1kg</h4>
                <img className='box-icon' src={arrow2} alt='truck' />
              </div>
            </div>

            <div className='coco-profile'>
              <span className='coco-pText'>M</span>
            </div>

          </div>
        </div>
      {/**Coco Tag Closed */}  

        {/** Coconut Section */}
        <div className='cocoTag cocoTag1'>
          <div className='cocowrap'>

            <div className='cocogroup'>

              <div className='coco-icon'>
                <img className='coco-label' src={coconut} alt='truck' />
              </div>

              <span className='coco-span'>Okazi Leaves</span>
              <h3 className='coco-text'>$0.00</h3>

            </div>

            <div className='coco-box'>
              <div className='box-wrap'>
                <h4 className='box-text'>1kg</h4>
                <img className='box-icon' src={arrow2} alt='truck' />
              </div>
            </div>

            <div className='coco-profile'>
              <span className='coco-pText'>M</span>
            </div>

          </div>
        </div>
      {/**Coco Tag Closed */}  

        {/** Coconut Section */}
        <div className='cocoTag cocoTag1'>
          <div className='cocowrap'>

            <div className='cocogroup'>

              <div className='coco-icon'>
                <img className='coco-label' src={coconut} alt='truck' />
              </div>

              <span className='coco-span'>Okazi Leaves</span>
              <h3 className='coco-text'>$0.00</h3>

            </div>

            <div className='coco-box'>
              <div className='box-wrap'>
                <h4 className='box-text'>1kg</h4>
                <img className='box-icon' src={arrow2} alt='truck' />
              </div>
            </div>

            <div className='coco-profile'>
              <span className='coco-pText'>M</span>
            </div>

          </div>
        </div>
      {/**Coco Tag Closed */}  

      {/** Shoping Done */}

      <div className='shop-done'>
        <div className='done-wrapper'>

          <div className='total-tag'>
            <span className='total'>TOTAL</span>
            <span className='amount'>$2,560</span>
          </div>

          <div className='done-textTag'>
            <span className='done-text'>DONE SHOPPING</span>
          </div>

        </div>
      </div>

      {/** Shoping Done Closed */}

      </div>

    </div>
  )
}