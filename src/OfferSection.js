import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const OfferSection = () => {
  return (
    <>
    
        <div className='offer'>
            <div className='row'>
                <div className='col-2'>
                    <img src="images/exclusive.png" className='offer-img' alt=""/>
                </div>
                <div className='col-2'>
                    <p>Exclusive Available On RedStore</p>
                    <h1>Smart Band 4</h1>
                    <small>The Mi Smart Band 4 features a 39.9% larger (than mi band 3) AMOLED Color full-touch display with adjustable brihtness.So everything is clear as can be.</small><br/>
                    <a href="#" className='button'>Buy Now <ArrowRightAltIcon/> </a>
                </div>
            </div>
        </div>
   
</>
    
  )
}

export default OfferSection