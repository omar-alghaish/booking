import React from 'react'
import ProductSwiper from '../components/common/product/ProductSwiper'
import PriceCard from '../components/common/product/PriceCard'
import Desctiption from '../components/common/product/Desctiption'

const Details = () => {
  return (
    <div className='details-container'><ProductSwiper />
    <div className='second-part' style={{display:"flex"}}><Desctiption /><PriceCard /></div>
    </div>
  )
}

export default Details