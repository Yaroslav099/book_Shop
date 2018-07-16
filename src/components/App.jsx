import React from 'react';
import '../App.css';
import Books from '../components/Books';
import Menu from '../components/Menu';
import Cart from '../containers/Cart';
import {Card} from 'semantic-ui-react';
import Loader from './Loader';

class App extends React.Component {
    
    componentWillMount(){
     this.props.setBooks()
    }  
    render() {
      const {allBooks,isReady,filterBooks,sum,itemsInCart,buyBook,searchBook,searchBookText,filterBy} = this.props;
    
      if(!isReady) return <Loader />
      else {
        return (
          <React.Fragment>
           <Menu filterBooks={filterBooks} sum={sum} itemsInCart={itemsInCart} searchBook={searchBook} searchBookText={searchBookText} cart={<Cart />}/>
           <Card.Group itemsPerRow={5}>
           <Books allBooks={allBooks} buyBook={buyBook}/>
           </Card.Group>
          </React.Fragment>
        )
      }
    
  }
  }

  export default App;