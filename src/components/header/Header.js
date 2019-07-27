import React from 'react';
import Promo from "../promo/Promo";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import('./Header.css');

class Header extends React.Component {
    render() {
        return <div id="header-content">
            <div className="header">
                <Link tag="div" to="/" className="header-text">klink</Link>
                <Link className="barket" to="/cart">
                    {this.props.totalCount && <span className="dot"></span>}
                </Link>s
                <div className="cart-count">{this.props.totalCount > 0 && this.props.totalCount}</div>
            </div>
            <Promo/>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        totalCount: state.cart.items.length
    }
}

export default connect(mapStateToProps)(Header)