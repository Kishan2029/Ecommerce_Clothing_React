import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../Redux/Cart/Cart-action'
import {ReactComponent as ShoppingIcon} from '../Header/Asset/shopping-bag.svg'
import './Cart-icon.scss'

const CartIcon = ({toggleCartHidden}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})


export default connect(null,mapDispatchToProps)(CartIcon)