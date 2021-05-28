import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CustomButton from '../Custom-button/Custom-button'
import CartItem from '../Cart-item/Cart-item'
import {selectCartItems} from '../../Redux/Cart/Cart-selectors'

import './Cart-dropdown.scss'

const CartDropdown = ({cartItems}) =>(
    <div className='cart-dropdown'>
        <div className= 'cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})


export default connect (mapStateToProps)(CartDropdown)