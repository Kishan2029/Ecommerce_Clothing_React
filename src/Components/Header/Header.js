import React from 'react'
import {Link, link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CartIcon from '../Cart-icon/Cart-icon'
import {auth} from '../../Firebase/Firebase'
import CartDropdown from '../Cart-dropdown/Cart-dropdown'
import {ReactComponent as Logo} from './Asset/crown.svg'
import {selectCartHidden} from '../../Redux/Cart/Cart-selectors'
import {selectCurrentUser} from '../../Redux/User/User-selector'
import './Header.scss'

 const Header = ({currentUser,hidden}) =>(
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
        {hidden ? null :<CartDropdown/>}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)