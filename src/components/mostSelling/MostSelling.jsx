import React, { useEffect } from 'react'
import Headlines from '../Headlines/Headlines'
import { Swiper ,SwiperSlide } from 'swiper/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Navigation, Scrollbar } from 'swiper/modules'
import { CiCircleCheck } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../reduxToolkit/slices/counterSlice'
import Products from '../../api/products.json'

const MostSelling = () => {

    const dispatch = useDispatch()
    


    return (
        <section className='products_sec section'>
            <div className='container-fluid'>
                <Headlines subtitle={"Our Products"} title={"Most Selling"}/>

                {/* display products which fetched from json file */}
                <Swiper 
                    slidesPerView={1.2} 
                    spaceBetween={20} 
                    // loop={true}
                    modules={[Navigation , Scrollbar]}
                    navigation = {{nextEl: ".right-arrow" , prevEl: ".left-arrow"}}
                    scrollbar= {{el: ".swiper--option .swiper--progress"}}
                    breakpoints={{ 
                        600: {
                            slidesPerView: 2.3,
                        },
                        1200: {
                            slidesPerView: 2.3,
                        },
                        1400: {
                            slidesPerView: 4,
                        }
                    }}>
                    {
                        Products.map((data) => (
                            <SwiperSlide key={data.id}>
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
                                        <h5 className='prod_name'> {data.title} </h5>
                                        <ul className='ul'>
                                            <li className=''> <CiCircleCheck /> {data.category} </li>
                                            <li className=''> <CiCircleCheck />  {`${data.description.substring(0 , 20)} ...`}  </li>
                                        </ul>
                                        <button className='cart_butn' onClick={() => dispatch(increment())}> Add to cart </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                   
                        
                    
    
                </Swiper>
                <div className='swiper--option'>
                    <div className="swiper--progress"></div>
                    <div className="swiper--arrows">
                        <div className="arrow left-arrow"> <FaArrowLeftLong /> </div>
                        <div className="arrow right-arrow"> <FaArrowRightLong /> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostSelling
