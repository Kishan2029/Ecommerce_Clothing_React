export const addItemToCart = (cartItems, cartItemsToAdd) =>{
    const exisistingCartItem =cartItems.find(
        cartItem=>cartItem.id == cartItemsToAdd.id)
    
        if(exisistingCartItem){
            return cartItems.map(cartItem=>
                cartItem.id==cartItemsToAdd.id
                ? {...cartItem, quantity: cartItem.quantity+1}
                :cartItem
                )
        }
    return [...cartItems,{...cartItemsToAdd,quantity:1}]
}