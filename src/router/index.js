import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from '../components/app/App'
import Cart from '../components/cart/Cart'

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path='/' exact component={App} />
            <Route path='/cart' component={Cart} />
        </Router>
    </Provider>
);

export default Root