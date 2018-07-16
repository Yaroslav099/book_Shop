import {combineReducers} from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';

const mainReducer = combineReducers({
  bookReducer,
  cartReducer
})

export default mainReducer;