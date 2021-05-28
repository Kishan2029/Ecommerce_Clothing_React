import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import CustomButton from '../Custom-button/Custom-button'
import CartItem from '../Cart-item/Cart-item'
import {selectCartItems} from '../../Redux/Cart/Cart-selectors'

import './Cart-dropdown.scss'

const CartDropdown = ({cartItems, history}) =>(
    <div className='cart-dropdown'>
        <div className= 'cart-items'>
            {
                cartItems.length  ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :(
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})


export default withRouter(connect (mapStateToProps)(CartDropdown))