import React from 'react'
import {Link, link} from 'react-router-dom'
import {ReactComponent as Logo} from './Asset/crown.svg'
import './Header.scss'

 const Header = () =>(
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
        </div>
    </div>
)
export default Header