import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HomeContent = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <h1>Give Your Workout<br/> A New Style!</h1>
                <p>Success isn't always about greatness it's about consistency.Consistent <br/> hardwork gains success.Greatness will come</p>
                <a href="" className='button'>Explore Now <ArrowRightAltIcon/></a>

            </div>
            <div className='col-2'>
                <img src="/images/image1.png" alt=''/>

            </div>
        </div>
    </div>

    </>
  )
}

export default HomeContent