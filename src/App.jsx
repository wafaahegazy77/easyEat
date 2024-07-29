import React, { useContext, useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import Whishist from './pages/Whishist/Whishist'
import Cart from './pages/Cart/Cart'
import { MobileHandlerContext, MobilerHandlerProvider } from './utils/mobileHandler'
import MobileMenu from './components/MobileMenu/MobileMenu'
import LoadingPage from './components/LoadingPage/LoadingPage'
import { store } from './reduxToolkit/store/Store'
import { Provider } from 'react-redux'
import ProductDetails from './pages/ProductDetails/ProductDetails'

function App() {
    const [isLoading , setIsLoading] = useState(false)
    const Routing = createBrowserRouter([{ 
        path : '' , 
        element: <Layout/> , 
        children: [
            {index : true , element: <Home/> }  ,
            {path : '/about' , element: <About/> }  ,
            {path : '/shop' , element: <Shop/> }  ,
            {path : '/contact' , element: <Contact/> }  ,
            {path : '/whishlist' , element: <Whishist/> }  ,
            {path : '/cart' , element: <Cart/> }  ,
            {path : '/shop/:slog' , element: <ProductDetails/> }  ,

        ]}  
    ])

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        } , 1000)
    } , [])
    return (
        <>
          
                <MobilerHandlerProvider>
                    <Provider store={store}>
                        {isLoading ?  <LoadingPage/> : <RouterProvider router={Routing} /> }
                    </Provider>
                </MobilerHandlerProvider>
          
        </>
    )
}

export default App
