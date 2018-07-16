import React from 'react'

const Cart = (props) => {
  return (
      <div id='cart' className='hidden'> 
          <div className="ui celled list">
          {props.itemsInCart.map( (book,index) => {
              return(
                <div className='main'>
                  <div className="item width75">
                    <img className="ui avatar image" src={book.image}/>
                      <div className="content">
                        <div className="header">{book.author}</div>
                         {book.title} ціна - {book.price}
                      </div>
                  </div>
                  <div className='width25'>
                    <button className=" mini ui red button" onClick={(e)=>props.deleteItemFromCart(index,book.price)}>(Х)</button>
                  </div>
                </div>
              )
          })}
         </div>
     </div>
  )
}

export default Cart;
