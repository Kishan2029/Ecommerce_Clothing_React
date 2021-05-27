import React from 'react'
import CustomButton from '../Custom-button/Custom-button'
import './Collection-item.scss'

const Collectionitem =({id, name, price, imageUrl}) =>(
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton>Add to Cart</CustomButton>
    </div>
)

export default Collectionitem