import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TestimonialSection = () => {
  return (
    <>
    <div className='testimonial'>
        <div className='small-container'>
            <div className='row'>
                <div className='col-3'>
                    <FormatQuoteIcon style={{color:"#ff523b",fontSize:"32px"}}/>
                    <p>lorem ipsum is simply yhe dummy text of the printing and type setting industries.Lorem ipsum has been the industries standard dummy text ever.</p>
                    <div>
                    <StarIcon style={{ color: '#ff523b' }} />
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <img src="images/user-1.png" alt=""/>
                <h3> Sean Parker</h3>

                </div>
                <div className='col-3'>
                    <FormatQuoteIcon style={{color:"#ff523b",fontSize:"32px"}}/>
                    <p>lorem ipsum is simply yhe dummy text of the printing and type setting industries.Lorem ipsum has been the industries standard dummy text ever.</p>
                    <div>
                    <StarIcon style={{ color: '#ff523b' }} />
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <img src="images/user-2.png" alt=""/>
                <h3> Mike Smith</h3>

                </div>
                <div className='col-3'>
                    <FormatQuoteIcon style={{color:"#ff523b",fontSize:"32px"}}/>
                    <p>lorem ipsum is simply yhe dummy text of the printing and type setting industries.Lorem ipsum has been the industries standard dummy text ever.</p>
                    <div>
                    <StarIcon style={{ color: '#ff523b' }} />
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarIcon style={{color:'#ff523b'}}/>
                    <StarBorderIcon style={{color:'#ff523b'}}/>
                </div>
                <img src="images/user-3.png" alt=""/>
                <h3> Mabel joe</h3>

                </div>
            </div>
        </div>

    </div>
    </>
    
  )
}

export default TestimonialSection