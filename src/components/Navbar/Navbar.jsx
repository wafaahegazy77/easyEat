import React, { useContext } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { MobileHandlerContext } from '../../utils/mobileHandler'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const {isMobile , openMenu , setOpenMenu} = useContext(MobileHandlerContext)

    const {counter} = useSelector(state => state.counter)
    
    return (
        <nav className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src="./assets/images/logo.png" className='logoImg'  alt="" />    
                </div>
                <ul>
                    <NavLink to={"/"} className={""}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/shop"}>Shop</NavLink>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                </ul>
                <div className="nav_end d-flex align-items-center">
                    <div className="navButn me-3">
                        <FaHeart />
                        <span className='num'> 0 </span>
                    </div>
                    <div className="navButn">
                        <FaShoppingCart/>
                        <span className='num'>  {counter} </span>
                    </div>
                </div>
                {isMobile && (
                    <div className={`nav_toggler ${openMenu ? "togglerActive" : ""}`} onClick={() => setOpenMenu(!openMenu)}>
                        <div></div>
                        <div></div>
                    </div>
                )}
         
            </div>
        </nav>
    )
}

export default Navbar
