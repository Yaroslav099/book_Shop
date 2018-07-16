const initialState = {
  sum : 0,
  itemsInCart : []
}

const cartReducer = (state = initialState,action) => {
  switch(action.type) {
    case "BUY_BOOK" : {
      return {
        sum : state.sum + (+action.payload.price),
        itemsInCart : [...state.itemsInCart,action.payload]
      }
    }
    case "DELETE_ITEM_FROM_CART" : {
      return {
        sum : state.sum - action.price,
        itemsInCart : state.itemsInCart.filter((item,index) => index !== action.index)
      }
    }
  }
  return state
}

export default cartReducer;