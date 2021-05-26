import React from 'react'
import CartIcon from '../Cart-icon/Cart-icon'
import {Link, link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from './Asset/crown.svg'
import {auth} from '../../Firebase/Firebase'
import './Header.scss'

 const Header = ({currentUser}) =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>   
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                  SHOP
            </Link>
            <Link className='option' to="/shop">
                  CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                 :
                <Link className='option' to='/signin'>SIGN IN</Link>
                
            }
           <CartIcon/>
            
        </div>
    </div>
)

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)