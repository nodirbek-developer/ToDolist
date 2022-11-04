import React from 'react'
import Img from '../images/photo_2022-10-31_15-43-42.jpg'

export default function Error() {
    return (
        <div className='text-center mt-4' >
            <img src={Img} alt="empty" className='img w-75 round'/>
            <h4 className='text-danger mt-3'>Hozircha mahsulot yo'q !!!</h4>
        </div>
    )
}
