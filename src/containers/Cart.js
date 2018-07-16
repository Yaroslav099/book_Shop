import {connect} from 'react-redux'
import {deleteItemFromCart} from '../actions/cartActions';
import Cart from '../components/Cart';

export default connect(
    state =>({
        itemsInCart : state.cartReducer.itemsInCart
    }),
    {deleteItemFromCart}
)(Cart);