import React,{useState} from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../Components/Preview-Collection/Preview-collection'
// class ShopPage extends React.Component{
//     constructor(props){
//         super(props)

//         this.state={
//             collections:SHOP_DATA
//         }
//     }
//     render(){
//         const {collections} = this.state;
//         return(
//             <div className='shop-page'>
//                 {
//                     collections.map(({id,...otherCollectionProps}) =>(
//                         <CollectionPreview key={id} {...otherCollectionProps}/>
//                     ))
//                 }
                
//             </div>
//         )
//     }
// }

const ShopPage =() =>{
    const[collections] = useState (SHOP_DATA)
    return(
        <div className='shop-page'>
            {
                collections.map(({id,...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
            
        </div>
    )
}

export default ShopPage;