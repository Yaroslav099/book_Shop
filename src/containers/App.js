import App from '../components/App';
import {connect} from 'react-redux';
import _ from 'lodash';
import {setBooks,filterBooks} from '../actions/booksActions';
import {buyBook,searchBook,deleteItemFromCart} from '../actions/cartActions';

const decorate = () => connect(
    state => ({ 
      allBooks :filterWithButtons(state.bookReducer.books,state.bookReducer.filterBy).filter(el=> el.author.indexOf(state.bookReducer.searchValue) >=0),   
      isReady : state.bookReducer.isReady,
      filterBy : state.bookReducer.filterBy,
      sum : state.cartReducer.sum,
      itemsInCart : state.cartReducer.itemsInCart,
      searchBookText : state.bookReducer.searchValue
    }),
    {setBooks,filterBooks,buyBook,searchBook,deleteItemFromCart}
  )
  const filterWithTextInput = (booksArray,searchText) => {
    booksArray.filter(book => book.author.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
  }

  const filterWithButtons = (books,filterValue) => {
    switch(filterValue) {
        case "EXPENSIVE" : {
            return _.orderBy(books, 'price', 'desc')
        }
        case "CHEEP" : {
         return _.orderBy(books, 'price', 'asc')
        }
        case "AUTHOR" : {
         return _.orderBy(books, 'author', 'asc')
        }
        case "ALL" : {
          return books
        }
        default : {
            return books
        }
    }
  }

export default decorate()(App);