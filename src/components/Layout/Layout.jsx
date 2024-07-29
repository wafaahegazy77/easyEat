import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'

const Layout = () => {
    return (
      <>
        <Navbar/>
        <MobileMenu/>
        <Outlet></Outlet>
        <Footer/>
      </>
    )
}

export default Layout
