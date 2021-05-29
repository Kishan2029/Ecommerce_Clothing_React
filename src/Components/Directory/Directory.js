import React,{useState} from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { selectDirectorySections} from '../../Redux/Directory/Directory-selector'

import MenuItem from '../Menu-item/Menu-item'
import './Directory.scss'
const Directory = ({sections}) => (

    <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionsProps}) => (
                <MenuItem key={id} {...otherSectionsProps}/>
            ))
        }

    </div>
)
    
const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
