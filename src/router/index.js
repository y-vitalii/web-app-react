import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Cart from '../components/cart/Cart'
import Content from '../components/content/Content'

const Main = () => (
    <main>
        <Switch>
            <Route path='/' component={Content }/>
            <Route path='/cart' component={Cart} />
        </Switch>
    </main>
);

export default Main