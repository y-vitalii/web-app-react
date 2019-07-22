import React from 'react';
import Promo from "../promo/Promo";
import { Link } from "react-router-dom";
import('./Header.css');

class Header extends React.Component {
    render() {
        return <div id="header-content">
            <div className="header">
                <Link tag="div" to="/" className="header-text">klink</Link>
                <Link className="barket" to="/cart">
                    <span className="dot"></span>
                </Link>
                <div className="cart-count">'Total'</div>
            </div>
            <Promo/>
        </div>;
    }
}

export default Header