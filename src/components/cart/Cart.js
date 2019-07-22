import React from 'react'
import Header from "../header/Header";
import Bottom from "../bottom/Bottom";

import ('./Cart.css');

class Cart extends React.Component {
    render() {
        return (
            <div id="cart-content">
                <Header/>
                <div className="cart-content">
                    <ul>
                        <li className="cart-value">
                            <div className="top-content">
                                <div className="inline image left">
                                    <img src={require = '../assets/products/item1.png'} width="70" height="70"></img>
                                </div>
                                <div className="inline info center"></div>
                                <button className="inline button right">x</button>
                            </div>
                            <div className="bottom-content">
                                <div className="inline left text-style">Грн</div>
                                <div className="inline center">
                                    <button className="button">-</button>
                                    <div className="inline text-style"></div>
                                    <button className="button">+</button>
                                </div>
                                <div className="inline right text-style total"></div>
                            </div>
                        </li>
                    </ul>
                    <div className="confirm-content">
                        <button className="inline button-accept col2">Заказать</button>
                        <h3 className="inline col2"></h3>
                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}

export default Cart