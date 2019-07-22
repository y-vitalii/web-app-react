import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    items: [
        {key: 1, name: 'Product product', cost: 100, imgSrc: ''},
        {key: 2, name: 'Product product', cost: 200, imgSrc: ''},
        {key: 3, name: 'Product product', cost: 300, imgSrc: ''},
        {key: 4, name: 'Product product', cost: 400, imgSrc: ''},
        {key: 5, name: 'Product product', cost: 500, imgSrc: ''},
        {key: 6, name: 'Product product', cost: 600, imgSrc: ''},
        {key: 7, name: 'Product product', cost: 700, imgSrc: ''}
    ]
};

function productsReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        const data = [].concat(state.items);
        data.splice(0, 1);

        return {
            ...state,
            items: data
        };
    }

    return state;
}

export default productsReducer;