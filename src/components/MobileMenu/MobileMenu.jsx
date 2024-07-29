import React, { useContext } from 'react'
import { MobileHandlerContext } from '../../utils/mobileHandler'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MobileMenu = () => {
    const {openMenu} = useContext(MobileHandlerContext )

    return (
        <>
            <div className={`mobileMenu ${openMenu ? "acitve" : ""}`}>
                <motion.ul initial= {{opacity : 0 , y:10}} whileInView={{opacity: 1 , y:0}} transition={{delay: .2 , duration: .3 , ease:"easeInOut"}}>
                    <NavLink to={"/"} className={"active"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/shop"}>Shop</NavLink>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                </motion.ul>
            </div>
        </>
    )
}

export default MobileMenu
