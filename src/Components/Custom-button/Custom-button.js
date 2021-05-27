import React from 'react'

import './Custom-button.scss'
const CustomButton=({children,isGoogleSignIn, inverted, ...otherProps}) =>(
    <button className={`${inverted ? 'inverted' :''}${isGoogleSignIn ? 'google-sign-in' :''}custom-button`} 
    // <button classname='custom-button'
    {...otherProps}>
        {children}
    </button>
)

export default CustomButton
