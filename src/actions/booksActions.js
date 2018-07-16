import axios from 'axios';

const setBooks = () => (
  (dispatch) => {
    axios.get('/books.json')
    .then(response => dispatch({
        type : 'SET_BOOKS',
        payload : response.data
    }))  
  }
)

const filterBooks = (value) => ({
    type : "FILTER_BOOKS",
    payload : value
})

export {setBooks,filterBooks};