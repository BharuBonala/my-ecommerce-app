import React from 'react'

const FooterSection = () => {
  return (
    <>
    <div className='footer'>
      <div className='row'>
            <div className='col-4'>
                <div className='footer-1'>
                <h3>Download Our App</h3>
                <p>Download app for android and ios mobile phone</p>
                <div className='app-logo'>
                    <img src="images/play-store.png" alt=""/>
                    <img src="images/app-store.png" alt=""/>
                </div>
                </div>
                
            </div>
            <div className='col-4'>
                <div className='footer-2'>
                <img src="images/logo-white.png" alt=""/>
                <p>Our Purpose Is To Sustainably Make The Pleasure And Benefits Of Sports Accesible To The Many.</p>
            </div>
                </div>
            <div className='col-4'>
                <div className='footer-3'>
                <h3>Useful LInks</h3>
                <ul>
                    <li>Coupon</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                </ul>
                </div>
            </div>
            <div className='col-4'>
                <div className='footer-4'>
                <h3>Follow Us</h3>
                <ul>
                    <li>Youtube</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>FaceBook</li>
                </ul>
                </div>
            </div>
            <hr/>
            <p className='copy-right'>Copyright 2020 Easy Tutorials</p>
        </div>
    </div>
    
    
    </>


  )
}

export default FooterSection