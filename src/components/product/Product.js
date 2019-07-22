import React from 'react'

import ('./Product.css');

class Product extends React.Component {
    render() {
        return (
            <div id="product-content">
                <div className="top-text">Item</div>
                <div className="img-content swiper-lazy">
                </div>
                <div className="bottom">
                    <div className="bottom-text">Text</div>
                </div>
            </div>
        )
    }
}

export default Product;