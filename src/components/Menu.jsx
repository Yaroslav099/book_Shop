import React from 'react'

const Menu = ({filterBooks,sum,itemsInCart,searchBookText, searchBook,cart}) => {
  return (
  <div className="ui menu header">

  <a className="item" id='ALL' onClick={(e)=> filterBooks(e.target.id) }>Всі</a>
  <a className="item" id='EXPENSIVE'onClick ={(e)=> filterBooks(e.target.id)}>Дорогі</a>
  <a className="item" id='CHEEP' onClick ={(e)=> filterBooks(e.target.id)}>Дешеві</a>
  <a className="item" id='AUTHOR' onClick ={(e)=> filterBooks(e.target.id)}>По автору</a>

   <div className="ui input focus">
     <input type="text" placeholder="Search..." style={{'marginLeft' : '100px'}}  onChange={(e)=> searchBook(e.target.value)} />
   </div>
  
  <div className="right menu">
    <a className="item">Сума (<p>{sum}</p>)</a>
    <a className="item" onClick={toggleCart}>Корзина (<p>{itemsInCart.length}</p>)</a>
    {cart}
  </div>

  </div>
  )
}

const toggleCart = () => {
  const cart = document.getElementById('cart');
  cart.classList.toggle('cart')
  cart.classList.toggle('hidden')
}

export default Menu;