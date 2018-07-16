import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import mainReducer from './reducers/index';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(mainReducer,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

