import React from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
import Select from "../select/Select";
import Product from "../product/Product";
import {connect} from 'react-redux';

import ('./Content.css');

const config = {
    slidesPerView: 3,
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
};

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.select = React.createRef();
    }

    swiperRef = null;

    updateItems(key) {

    }

    render() {
        return (
            <div id="main-content">
                <div className="select-block">
                    <div className="head-text">
                        <h4>'tex1'</h4>
                        <h4>'tex2'</h4>
                    </div>
                    <label>
                        <Select action={this.updateItems}/>
                    </label>
                </div>
                <div className="products-content">
                    <AwesomeSwiper ref={this.swiperRef} config={config}>
                        <div className="swiper-wrapper">
                            {this.props.products.map((value, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <Product/>
                                        <button>Buy</button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </AwesomeSwiper>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.items
    }
}

export default connect(mapStateToProps)(Content);