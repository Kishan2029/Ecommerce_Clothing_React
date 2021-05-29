import React from 'react'
import {connect} from 'react-redux'

import Collectionitem from '../../Components/Collection-item/Collection-item'

import {selectCollection} from '../../Redux/Shop/Shop-selector'

import './Collection.scss'

const CollectionPage = ({collection}) =>{
    console.log(collection)
    return(
    <div classname='collection-page'>
        <h2>Collection Page</h2>

    </div>
)}

const mapStateToProps = (state, ownProps) =>({
    
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)