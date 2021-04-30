import React from 'react'
import './Custom-button.scss'
const CustomButton=({children,isGoogleSignIn, ...otherProps}) =>(
    <button className={`${isGoogleSignIn ? 'google-sign-in' :''}custom-button`} 
    // <button classname='custom-button'

    {...otherProps}>
        {children}
    </button>
)

export default CustomButton
