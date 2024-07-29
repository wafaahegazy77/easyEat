import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='header'> 
            <div className="container">
                <div className="txt_box text-center col-lg-10 mx-auto">
                    <h1 className='title fiber_font fw-bold text-white'>
                        Crafting your Exceptional Dining Reservations
                    </h1>
                    <div className="p my-5 col-lg-10 mx-auto">
                        Reservation is a step into a world of gastronomic wonder. Reserve your table today and let us paint your culinary dreams into reality.
                    </div>
                    <Link to="" className='butn'> Explore Products</Link>
                </div>
            </div>

            <img src="./assets/images/header-1.jpg" className='bg'  alt="" />    
        </div>
    )
}

export default Banner
