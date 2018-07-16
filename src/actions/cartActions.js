const buyBook = (currentBook) => ({
    type : "BUY_BOOK",
    payload : currentBook
})
const toggleCart = () => ({
    type : 'TOGGLE_CART'
})
const searchBook = (searchText) => ({
    type : "SEARCH",
    payload : searchText
})
const deleteItemFromCart = (index,price) => ({
    type : "DELETE_ITEM_FROM_CART",
    index : index,
    price : price

})

export {buyBook,toggleCart,searchBook,deleteItemFromCart};