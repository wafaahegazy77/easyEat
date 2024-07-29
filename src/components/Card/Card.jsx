import React, { useEffect } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../reduxToolkit/slices/counterSlice'
import { getAllProducts } from '../../reduxToolkit/slices/productsSlice'
import LoadingPage from '../LoadingPage/LoadingPage'
import { Link } from 'react-router-dom'

const Card = () => {

    const { data , isLoading , error } = useSelector(state => state.products)

    const dispatch = useDispatch()
    
    useEffect (() => {
        dispatch(getAllProducts())
    } , [])

    if(isLoading) {
        return <LoadingPage />
    }

    const cat = data.category



    return (

        //   display products which fetched from fake API  
        data?.map((data , index) => {
            if(index >= 9) return null 
            return  <div className='col-lg-4' key={data.id}>
                <div className='prodCard' >
                    <div className="img_box">
                        <img src={data.image} className='prodImg'  alt="Product Image" />    
                        {/* <div className="newBadge">New</div> */}
                    </div>
                    <div className="card-body">
                        <div className="card_head">
                            <h5 className='price'> {data.price} </h5>
                            <div className="rating"> <FaStar /> {data.rating.rate} </div>
                        </div>
                        <Link to={"Details"} className='prod_name'> {data.title} </Link>
                        <ul className='ul'>
                            <li className=''> <CiCircleCheck /> {data.category} </li>
                            <li className=''> <CiCircleCheck />  {`${data.description.substring(0 , 20)} ...`}  </li>
                        </ul>
                        <button className='cart_butn' onClick={() => dispatch(increment())}> Add to cart </button>
                    </div>
                </div>
            </div>
        })


    )
}

export default Card
