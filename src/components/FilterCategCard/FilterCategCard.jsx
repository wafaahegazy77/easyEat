import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const FilterCategCard = ({cat , imgSrc}) => {
    const [activeFilter , setActiveFilter] = useState(false)
  return (
    <div className={`filter_item ${activeFilter ? "active" : ""} `} onClick={() => setActiveFilter(true)} >
        <div className="img_box">
            <img src={imgSrc} className='card_img' alt="" />
            <FaCheckCircle />
        </div>
        <h5 className='categ_name'> {cat} </h5>
    </div>
)
}

export default FilterCategCard
