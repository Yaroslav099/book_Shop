import React from 'react'

const Books = ({allBooks, buyBook}) => {
  return (
    allBooks.map((book,index) => {
      return (
     
     <div className="ui card" key={index}>
     <img src={book.image} className="ui image" />
    <div className="content">
      <div className="header">{book.title}</div>
     <div className="meta">
        <span className="date">{book.author}</span>
      </div>
      <div className="description">{book.price}</div>
    </div>
    <button className="ui positive button" role="button" onClick={()=>buyBook(book)}>Добавити в корзину</button>
  </div>
  
  
    )}) 
  )}

export default Books;