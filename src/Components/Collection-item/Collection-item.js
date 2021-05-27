import React from 'react'
import CustomButton from '../Custom-button/Custom-button'
import {connect} from 'react-redux'
import {addItem} from '../../Redux/Cart/Cart-action'
import './Collection-item.scss'

const Collectionitem =({item , addItem}) =>{
    const {name,price,imageUrl} = item;
    return(
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} >
            Add to Cart
        </CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Collectionitem)