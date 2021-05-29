import React from 'react'
import {connect} from 'react-redux'

import Collectionitem from '../../Components/Collection-item/Collection-item'

import {selectCollection} from '../../Redux/Shop/Shop-selector'

import './Collection.scss'

const CollectionPage = ({collection}) =>{
    const {title, items} = collection
    return(
    <div classname='collection-page' >
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item=>(
                    <Collectionitem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) =>({
    
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)