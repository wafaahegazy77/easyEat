import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const {pathname} = useLocation();
    return (
        <section className='bread_sec section' >
            <div className="container">
                <div className="txt_box text-center">
                    <Link to={"/"}>Home</Link> -
                    <span className='page'> {pathname.slice(1)} </span>
                </div>
            </div>
            <img src="./assets/images/video_bg.jpeg" className='bg'  alt="" />    
        </section>
    )
}

export default BreadCrumbs
