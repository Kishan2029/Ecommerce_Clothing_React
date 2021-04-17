import React from 'react'
import './Custom-button.scss'
const CustomButton=({children,...otherProps}) =>(
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default CustomButton
