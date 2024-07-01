
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const FeaturedProducts = () => {
  return (
    <>
    <div className='container'>
    <div className='small-container'>
        <div className='row'>
            <h1 className='title'>Featured Products</h1>
            <div className='col-4'>
                <img src="images/product-1.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{ color: '#ff523b' }} />
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50</p>
            </div>
            <div className='col-4'>
                <img src="images/product-2.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50</p>
            </div>
            <div className='col-4'>
                <img src="images/product-3.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50</p>
            </div>
            <div className='col-4'>
                <img src="images/product-4.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50</p>
            </div>
        </div>
    </div>

    </div>
    </>
    
  )
}

export default FeaturedProducts