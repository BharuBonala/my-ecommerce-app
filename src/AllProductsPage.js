import React from 'react'
import Navbar from './Navbar'
import FooterSection from './FooterSection'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';


const AllProductsPage = () => {
  return (
    <>
    <Navbar/>
    <div className='small-container'>
    <div class="row row-2">
        
        <h2>All Products</h2>
        <select>
            <option>Default sorting</option>
            <option>Sort by price</option>
            <option>Sort by popularity</option>
            <option>Sort by rating</option>
            <option>sort by sale</option>
        </select>
        
        
    </div>
    <div className='row'>
            
            <div className='col-4'>
                <Link to="/productdetails"><img src="images/product-1.jpg" alt=""/></Link>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{ color: '#ff523b' }} />
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
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
                    <StarIcon style={{color:'#ff523b'}}/>
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
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-9.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{ color: '#ff523b' }} />
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-10.jpg" alt=""/>
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
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-12.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-5.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-2.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
            <div className='col-4'>
                <img src="images/product-3.jpg" alt=""/>
                <h4>Red Printed T-shirt</h4>
                <div>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <p>$50.00</p>
            </div>
        </div>
        <div className='page-btn'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <ArrowRightAltIcon/>
        </div>

    </div>
     <FooterSection/>

    </>
  )
}

export default AllProductsPage