import React from 'react';
import('./Promo.css');

class Promo extends React.Component{
    render() {
        return (
            <div id="promo-content">
                <img className="promo-img" src={require('../../assets/parachutes.png')} alt="logo"/>
                <div className="promo">
                    <div className="promo-text">"text1"</div>
                    <div className="promo-text">"text2"</div>
                </div>
            </div>
        )
    }
}

export default Promo