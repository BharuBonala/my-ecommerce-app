import React,{useState} from 'react'
import Navbar from './Navbar'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ProductDetailsPage = () => {
    const [mainImage,setMainImage]=useState("images/gallery-1.jpg")
    const handleImageClick=(newImage)=>{
        setMainImage(newImage)
    }
  return (
    <>
    <Navbar/>
    <div className='small-container single-product'>
        <div className='row'>
            <div className='col-2'>
                <img src={mainImage} width="100%" alt=""/>
                <div className='single-image-row'>
                    <div className='single-image-col'>
                        <img src="images/gallery-1.jpg" onClick={()=>handleImageClick("images/gallery-1.jpg")} width="100%" alt=""/>
                    </div>
                    <div className='single-image-col'>
                        <img src="images/gallery-2.jpg" onClick={()=>handleImageClick("images/gallery-2.jpg")} width="100%" alt=""/>
                    </div>
                    <div className='single-image-col'>
                        <img src="images/gallery-3.jpg" onClick={()=>handleImageClick("images/gallery-3.jpg")} width="100%" alt=""/>
                    </div>
                    <div className='single-image-col'>
                        <img src="images/gallery-4.jpg" onClick={()=>handleImageClick("images/gallery-4.jpg")} width="100%" alt=""/>
                    </div>
                </div>
            </div>
            <div className='col-2'>
                <p>Home/ T-shirt</p>
                <h1>Red Printed T-Shirt By HRX</h1>
                <h4>$50.00</h4>
                <select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                </select>
                <input type="number" value="1"/>
                <a href="" className='button'>Add To Cart</a>
                <br/>
                <h3>Product Details</h3>
                <p>Give Your Summer Wadrobe A style By HRX Men's Active T-shirt.Team It With A Pair Of Shorts At Your Morning Workout Or A Denims For An Evening Out With Guys.</p>
            </div>
        </div>
    </div>
    <div className='small-container'>
        <div className='row row-2'>
            <h2>Related Products</h2>
            <p>View More</p> 
        </div>
    </div>
    <div className='small-container'>
        <div className='row'>
        <div className='col-4'>
                <img src="images/product-6.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-7.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-8.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-11.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
        </div>
    </div>


    </>
  )
}

export default ProductDetailsPage