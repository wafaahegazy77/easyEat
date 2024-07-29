import React from 'react'

const Headlines = ({title , subtitle}) => {
    return (
        <div className='sec_head text-center mb-5'>
            <p className='subtitle mb-1 text-white'> {subtitle} </p>
            <h2 className='title text-white fw-bold'> {title} </h2>
        </div>
    )
}

export default Headlines
